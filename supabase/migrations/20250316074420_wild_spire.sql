/*
  # Add sample products

  This migration adds sample products for each category to populate the initial database.
*/

INSERT INTO products (name, description, price, sale_price, discount, category, condition, image_url)
VALUES
  -- Clothing
  ('University Hoodie', 'Comfortable cotton blend hoodie with university logo', 49.99, 29.99, 40, 'Clothing', 'New', 'https://picsum.photos/800/800?random=1'),
  ('Campus T-Shirt', 'Classic fit cotton t-shirt with campus design', 24.99, 14.99, 40, 'Clothing', 'New', 'https://picsum.photos/800/800?random=2'),
  
  -- Accessories
  ('Laptop Backpack', 'Spacious backpack with laptop compartment', 79.99, 49.99, 37, 'Accessories', 'New', 'https://picsum.photos/800/800?random=3'),
  ('Wireless Mouse', 'Ergonomic wireless mouse for productivity', 29.99, 19.99, 33, 'Accessories', 'Like New', 'https://picsum.photos/800/800?random=4'),
  
  -- Room Decor
  ('LED String Lights', 'Warm white LED string lights for room decoration', 24.99, 14.99, 40, 'Room Decor', 'New', 'https://picsum.photos/800/800?random=5'),
  ('Wall Art Set', 'Set of 3 minimalist wall art prints', 39.99, 29.99, 25, 'Room Decor', 'New', 'https://picsum.photos/800/800?random=6');