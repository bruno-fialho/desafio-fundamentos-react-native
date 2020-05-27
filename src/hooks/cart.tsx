import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // Load items from Async Storage
      const response = await AsyncStorage.getItem('@GoMarketplace: cart');

      // Check if data exists
      if (response) {
        // Set all the data from Async Storage to products
        setProducts(JSON.parse(response));
      }
    }

    // Call the loadProducts function
    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      // Check if product is already on cart
      const findProductIndex = products.findIndex(
        item => item.id === product.id,
      );

      if (findProductIndex === -1) {
        // No => addToCart
        setProducts([...products, { ...product, quantity: 1 }]);
      } else {
        // Yes => Increment quantity
        const newQuantity = products[findProductIndex].quantity + 1;

        const newProducts = products;

        newProducts[findProductIndex].quantity = newQuantity;

        setProducts(newProducts);
      }

      // Load data to Async Storage
      await AsyncStorage.setItem(
        '@GoMarketplace: cart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      const newProducts = [...products];

      // Find index
      const productIndex = products.findIndex(item => item.id === id);

      if (productIndex !== -1) {
        newProducts[productIndex].quantity += 1;
        setProducts(newProducts);
      }

      // Load data to Async Storage
      await AsyncStorage.setItem(
        '@GoMarketplace: cart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      let newProducts = [...products];

      // Find index
      const productIndex = products.findIndex(item => item.id === id);

      if (productIndex !== -1) {
        if (products[productIndex].quantity === 1) {
          newProducts = products.filter(product => product.id !== id);
        } else {
          newProducts[productIndex].quantity -= 1;
        }
        setProducts(newProducts);
      }

      // Load data to Async Storage
      await AsyncStorage.setItem(
        '@GoMarketplace: cart',
        JSON.stringify(newProducts),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
