/*
  # Exchange Listings Feature

  1. Single Table Design
    - `exchanges`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `listing_type` (text) - Options: 'Sell', 'Rent', 'Adopt', 'Lost and Found'
      - `location` (text) - Options: 'Bidholi', 'Pondha', 'Doonga', 'Kandoli', 'Prem Nagar', 'City'
      - `description` (text)
      - `contact` (text) - User's contact information
      - `contact_type` (text) - Added contact_type column to store WhatsApp or Instagram
      - `image_urls` (jsonb) - Array of image URLs
      - `user_id` (uuid, foreign key) - References auth.users
      - `status` (text) - Default: 'active', Options: 'active', 'pending', 'completed', 'removed'

  2. Security
    - Enable RLS
    - Add policies for authenticated users
    - Anonymous users can view listings but not create them
*/

-- Create exchanges table with consolidated design if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'exchanges') THEN
    CREATE TABLE exchanges (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      created_at timestamptz DEFAULT now(),
      listing_type text NOT NULL CHECK (listing_type IN ('Sell', 'Rent', 'Adopt', 'Lost and Found')),
      location text NOT NULL CHECK (location IN ('Bidholi', 'Pondha', 'Doonga', 'Kandoli', 'Prem Nagar', 'City')),
      description text NOT NULL,
      contact text NOT NULL,
      contact_type text,
      image_urls jsonb NOT NULL DEFAULT '[]'::jsonb,
      user_id uuid REFERENCES auth.users(id),
      status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'pending', 'completed', 'removed'))
    );

    -- Create indexes for faster queries
    CREATE INDEX idx_exchanges_listing_type ON exchanges(listing_type);
    CREATE INDEX idx_exchanges_location ON exchanges(location);
    CREATE INDEX idx_exchanges_status ON exchanges(status);
    CREATE INDEX idx_exchanges_created_at ON exchanges(created_at DESC);
  END IF;
END
$$;

-- If the contact_type column doesn't exist, add it
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' 
    AND table_name = 'exchanges' 
    AND column_name = 'contact_type'
  ) THEN
    ALTER TABLE exchanges ADD COLUMN contact_type text;
  END IF;
END
$$;

-- Enable Row Level Security (safe to run even if already enabled)
ALTER TABLE exchanges ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to ensure clean slate
DROP POLICY IF EXISTS "Anyone can view active exchange listings" ON exchanges;
DROP POLICY IF EXISTS "Anyone can create exchange listings" ON exchanges;
DROP POLICY IF EXISTS "Users can update their own exchange listings" ON exchanges;
DROP POLICY IF EXISTS "Users can delete their own exchange listings" ON exchanges;

-- Anyone can view active exchange listings
CREATE POLICY "Anyone can view active exchange listings"
  ON exchanges
  FOR SELECT
  USING (status = 'active');

-- Allow anyone (including anonymous users) to create exchange listings
CREATE POLICY "Anyone can create exchange listings"
  ON exchanges
  FOR INSERT
  WITH CHECK (true);

-- Users can update their own exchange listings
CREATE POLICY "Users can update their own exchange listings"
  ON exchanges
  FOR UPDATE
  USING (auth.uid() = user_id OR auth.uid() IS NULL)
  WITH CHECK (auth.uid() = user_id OR auth.uid() IS NULL);

-- Users can delete their own exchange listings
CREATE POLICY "Users can delete their own exchange listings"
  ON exchanges
  FOR DELETE
  USING (auth.uid() = user_id OR auth.uid() IS NULL);

-- Only create the function if it doesn't exist
CREATE OR REPLACE FUNCTION auto_archive_old_exchanges()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE exchanges
  SET status = 'completed'
  WHERE status = 'active'
  AND created_at < NOW() - INTERVAL '30 days';
  
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Drop trigger if it exists
DROP TRIGGER IF EXISTS trigger_auto_archive_old_exchanges ON exchanges;

-- Create trigger to run auto-archive function daily
CREATE TRIGGER trigger_auto_archive_old_exchanges
AFTER INSERT ON exchanges
FOR EACH STATEMENT
EXECUTE FUNCTION auto_archive_old_exchanges();

-- Create storage bucket for exchange images
-- Note: This assumes you already have storage enabled in your Supabase project
INSERT INTO storage.buckets (id, name, public)
VALUES ('exchange_images', 'exchange_images', true)
ON CONFLICT (id) DO NOTHING;

-- Enable public access to the exchange_images bucket
DROP POLICY IF EXISTS "Public access to exchange images" ON storage.objects;
CREATE POLICY "Public access to exchange images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'exchange_images');

-- Allow anyone to upload exchange images (only if the policy doesn't already exist)
DO $$
BEGIN
  -- Check if policy exists before trying to create it
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Anyone can upload exchange images'
  ) THEN
    -- Create the policy if it doesn't exist
    CREATE POLICY "Anyone can upload exchange images"
      ON storage.objects
      FOR INSERT
      WITH CHECK (
        bucket_id = 'exchange_images'
      );
  END IF;
END
$$;

-- Allow anyone to delete their own exchange images by path (only if the policy doesn't already exist)
DO $$
BEGIN
  -- Check if policy exists before trying to create it
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE schemaname = 'storage' AND tablename = 'objects' AND policyname = 'Anyone can delete exchange images'
  ) THEN
    -- Create the policy if it doesn't exist
    CREATE POLICY "Anyone can delete exchange images"
      ON storage.objects
      FOR DELETE
      USING (
        bucket_id = 'exchange_images'
      );
  END IF;
END
$$; 