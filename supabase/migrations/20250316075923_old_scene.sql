/*
  # Add sample products and accommodations

  This migration adds sample data for products and accommodations to demonstrate the functionality.

  1. Sample Products
    - Adds products for each category (Clothing, Accessories, Room Decor)
    - Includes detailed descriptions and pricing
  
  2. Sample Accommodations
    - Adds various types of accommodations
    - Includes location and availability information
*/

-- Insert sample products if they don't exist
INSERT INTO products (name, description, price, sale_price, discount, category, condition, image_url)
SELECT * FROM (VALUES
  (
    'Premium University Hoodie',
    'High-quality cotton blend hoodie featuring the university logo. Available in multiple sizes. Perfect for those chilly days on campus.',
    59.99,
    39.99,
    33,
    'Clothing',
    'New',
    'https://picsum.photos/800/800?random=10'
  ),
  (
    'Wireless Study Headphones',
    'Noise-cancelling wireless headphones perfect for studying. Features include 30-hour battery life and comfortable ear cushions.',
    129.99,
    89.99,
    31,
    'Accessories',
    'New',
    'https://picsum.photos/800/800?random=11'
  ),
  (
    'Minimalist Wall Clock',
    'Modern wall clock with silent movement. Perfect for your study room or dorm. Battery included.',
    34.99,
    24.99,
    29,
    'Room Decor',
    'New',
    'https://picsum.photos/800/800?random=12'
  )
) AS new_products
WHERE NOT EXISTS (
  SELECT 1 FROM products 
  WHERE name IN ('Premium University Hoodie', 'Wireless Study Headphones', 'Minimalist Wall Clock')
);

-- Insert sample accommodations if they don't exist
INSERT INTO accommodations (title, description, price, location, type, availability, image_url)
SELECT * FROM (VALUES
  (
    'Deluxe Student Studio',
    'Modern studio apartment specifically designed for students. Features include a study area, kitchenette, and high-speed internet. Located just 5 minutes from the main campus.',
    799,
    'University District',
    'Studio',
    'Available from September',
    'https://picsum.photos/800/600?random=20'
  )
) AS new_accommodations
WHERE NOT EXISTS (
  SELECT 1 FROM accommodations WHERE title = 'Deluxe Student Studio'
);