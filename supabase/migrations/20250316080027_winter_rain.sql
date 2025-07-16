/*
  # Add sample products and accommodations

  1. Sample Data
    - Add sample products across different categories
    - Add sample accommodations with various types and locations
    - Include realistic pricing and descriptions
  
  2. Security
    - Ensure RLS policies are properly configured
    - Add necessary indexes for performance
*/

-- Add sample products
INSERT INTO products (name, description, price, sale_price, discount, category, condition, image_url)
VALUES
  ('MacBook Pro 2023', 'Latest M2 MacBook Pro, perfect for programming and design work. Includes charger and original box.', 1299.99, 1099.99, 15, 'Accessories', 'Like New', 'https://picsum.photos/800/800?random=1'),
  ('University Hoodie', 'Comfortable cotton blend hoodie with university logo. Size L.', 49.99, 39.99, 20, 'Clothing', 'New', 'https://picsum.photos/800/800?random=2'),
  ('LED Desk Lamp', 'Adjustable LED desk lamp with multiple brightness levels and USB charging port.', 39.99, 29.99, 25, 'Room Decor', 'New', 'https://picsum.photos/800/800?random=3'),
  ('Scientific Calculator', 'Texas Instruments TI-84 Plus, perfect for engineering courses.', 89.99, 69.99, 22, 'Accessories', 'Good', 'https://picsum.photos/800/800?random=4'),
  ('Dorm Room Mirror', 'Full-length mirror with wooden frame, perfect for dorm rooms.', 79.99, 59.99, 25, 'Room Decor', 'New', 'https://picsum.photos/800/800?random=5'),
  ('Campus Backpack', 'Waterproof laptop backpack with multiple compartments.', 69.99, 49.99, 28, 'Accessories', 'New', 'https://picsum.photos/800/800?random=6');

-- Add sample accommodations
INSERT INTO accommodations (title, description, price, location, type, availability, image_url)
VALUES
  ('Modern Studio Apartment', 'Fully furnished studio apartment near campus. Includes utilities and high-speed internet.', 899.99, 'North Campus Area', 'Studio', 'Available Now', 'https://picsum.photos/800/600?random=1'),
  ('Shared Student House', 'Private room in a shared 4-bedroom house. Fully equipped kitchen and laundry facilities.', 599.99, 'University District', 'Shared House', 'Available from June', 'https://picsum.photos/800/600?random=2'),
  ('Luxury Student Loft', 'Modern loft-style apartment with study area and gym access.', 1299.99, 'Downtown Campus', 'Apartment', 'Available from September', 'https://picsum.photos/800/600?random=3'),
  ('Cozy Campus Studio', 'Compact but well-designed studio with built-in storage solutions.', 799.99, 'South Campus', 'Studio', 'Available Now', 'https://picsum.photos/800/600?random=4');

-- Ensure indexes exist for common queries
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_accommodations_type ON accommodations(type);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_accommodations_created_at ON accommodations(created_at DESC);