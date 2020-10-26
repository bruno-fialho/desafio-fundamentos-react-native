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
      const findProduct = products.find(
        productFind => productFind.id === product.id,
      );

      if (findProduct) {
        // Yes => Increment quantity
        setProducts(
          products.map(productMap => {
            if (productMap.id === findProduct.id) {
              return { ...productMap, quantity: productMap.quantity + 1 };
            }
            return productMap;
          }),
        );
      } else {
        // No => Add to cart
        setProducts([...products, { ...product, quantity: 1 }]);
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
      setProducts(
        products.map(product => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        }),
      );

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
      await setProducts(
        products
          .map(product => {
            if (product.id === id) {
              return { ...product, quantity: product.quantity - 1 };
            }
            return product;
          })
          .filter(product => product.quantity >= 1),
      );

      // Load data to Async Storage
      await AsyncStorage.setItem(
        '@GoMarketplace: cart',
        JSON.stringify(products),
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
