# Shopping Cart Challenge

Welcome to the Shopping Cart Challenge! This project aims to replicate key functionalities you'd expect in an eCommerce platform. Dive in to understand the core features and how to implement them.

### Ecommerce Features

1. Product Listing
   - Fetch and display products from a provided JSON file.
2. Category Filtering
   - Implement a filter mechanism to sort products based on their categories.
3. Price Filtering
   - Add a feature that allows users to filter products based on their price range.
4. Context Usage
   - Leverage the useContext React hook to optimize data sharing across components. This avoids the need to pass unnecessary props down the component tree.

### Cart Functionalities

1. Add to Cart
   - Users should be able to select and add products to their shopping cart.
2. Remove from Cart
   - Users should be able to remove items from their shopping cart.
3. Modify Quantity
   - Users should be able to adjust the quantity of a product in their shopping cart.
4. Synchronize Product List and Cart
   - Ensure that any changes made in the cart (addition, removal, quantity changes) are reflected in the main product listing. This helps in maintaining consistency regarding stock numbers or product availability.
5. Persistent Cart Storage
   - Store the user's cart data in the browser's localStorage. This ensures that if a user reloads the page, their cart remains intact. Implementing this feature will earn you bonus points!
