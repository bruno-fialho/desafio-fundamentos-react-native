/* eslint-disable prettier/prettier */
if (productIndex === -1) {
  setProducts([...products, { ...product, quantity: 1 }]);
} else {
  const newProducts: Product[] = products;
  newProducts[productIndex].quantity += 1;

  setProducts([...newProducts]);
}

await AsyncStorage.setItem(
  '@GoMarketPlace:products',
  JSON.stringify(products),
);

// /////////////////////////////////////////////////////////

const addToCart = useCallback(async product => {
    await AsyncStorage.setItem(
      '@GoMarketPlace:products',
      JSON.stringify(product),
    );

    setProducts(state => [...state, product]);
  }, []);

// /////////////////////////////////////////////////////////

function handleAddToCart(item: Product): void {
  const product = {
    id: item.id,
    title: item.title,
    image_url: item.image_url,
    price: item.price,
    quantity: 1,
  };

  addToCart(product);
}
