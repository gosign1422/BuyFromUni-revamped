# Product Reviews System

This document provides instructions for setting up the product reviews system in Supabase.

## Overview

The reviews system allows users to:
- View reviews for products
- Submit their own reviews with ratings (1-5 stars)
- See average ratings for products

## Supabase Setup

### 1. Create the Reviews Table

Run the following SQL in your Supabase SQL Editor:

```sql
-- Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id TEXT NOT NULL,
  product_type TEXT NOT NULL,
  user_name TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for faster queries
CREATE INDEX IF NOT EXISTS reviews_product_id_idx ON public.reviews (product_id);
CREATE INDEX IF NOT EXISTS reviews_product_type_idx ON public.reviews (product_type);
CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON public.reviews (created_at);

-- Enable Row Level Security
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reviews
CREATE POLICY "Allow anyone to read reviews" 
  ON public.reviews 
  FOR SELECT 
  USING (true);

-- Allow anyone to insert reviews (for simplicity in this demo)
CREATE POLICY "Allow anyone to insert reviews" 
  ON public.reviews 
  FOR INSERT 
  USING (true);

-- Create function to update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to update updated_at timestamp
CREATE TRIGGER update_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
```