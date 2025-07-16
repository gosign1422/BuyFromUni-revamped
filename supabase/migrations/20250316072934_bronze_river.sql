/*
  # Initial Schema Setup

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `sale_price` (numeric)
      - `discount` (integer)
      - `category` (text)
      - `condition` (text)
      - `image_url` (text)
      - `user_id` (uuid, foreign key)
    
    - `accommodations`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `title` (text)
      - `description` (text)
      - `price` (numeric)
      - `location` (text)
      - `type` (text)
      - `availability` (text)
      - `image_url` (text)
      - `user_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  sale_price numeric,
  discount integer,
  category text NOT NULL,
  condition text,
  image_url text,
  user_id uuid REFERENCES auth.users(id),
  CONSTRAINT positive_price CHECK (price > 0),
  CONSTRAINT valid_discount CHECK (discount >= 0 AND discount <= 100)
);

-- Create accommodations table
CREATE TABLE accommodations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  description text,
  price numeric NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  availability text NOT NULL,
  image_url text,
  user_id uuid REFERENCES auth.users(id),
  CONSTRAINT positive_price CHECK (price > 0)
);

-- Enable RLS
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE accommodations ENABLE ROW LEVEL SECURITY;

-- Create policies for products
CREATE POLICY "Users can view all products"
  ON products
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own products"
  ON products
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Create policies for accommodations
CREATE POLICY "Users can view all accommodations"
  ON accommodations
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can insert their own accommodations"
  ON accommodations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own accommodations"
  ON accommodations
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own accommodations"
  ON accommodations
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);