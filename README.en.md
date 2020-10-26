<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Challenge 08: React Native Fundamentals
</h3>

<p align="center">
  <a href="#rocket-about-the-application">About the application</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#cd-installed-packages">Installed packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licence">Licence</a>
</p>

<p align="center">
  <img alt="GoMarketplace" src=./src/assets/gomarketplace.gif />
</p>

## :rocket: About the application

A mobile application in React Native along with TypeScript, using routes, Async Storage and the Context API.

The user can add items to the cart, as well as change quantities and delete items.

### Application Template

The template is available in the following URL: **[Access Template](https://github.com/Rocketseat/gostack-template-fundamentos-react-native)**

**Tip**: In case you don't know how to use Github repositories as templates, we have a guide in **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-desafios).**

Navigate to the created folder and open it in the Visual Studio Code, remember to execute the command `yarn` in your terminal in order to install all the dependencies

### Using a fake API

In package.json there is a dependency called json-server, and a file called server.json that contains the data for a / products route. To run this server you can run the following command:

```
yarn json-server server.json -p 3333
```

### Application features

The application has the following features:

- **` List the products of the fake API`**: The `Dashboard` page must be able to display a listing through a table, with the `title`, `image_url` and `price` fields.

- **`Add items to the cart`**: On the `Dashboard` page, the application must add new items to the cart or increase the number of items in the cart.

- **`Display cart items`**: The `Cart` page should display all items in the cart, along with the quantity, single value, subtotal value of the items and total of all items.

- **`Increase the number of items in the cart`**: The `Cart` page should allow the user to increase the number of items in the same product.

- **`Decrease quantity of an item in the cart`**: The `Cart` page should allow the user to decrease the quantity of items of the same product, including removing the product from the cart.

- **`Display total value of items in the cart`**: Both the `Dashboard` page and the `Cart` page must display the total value of all items in the cart.

### Specification of tests

In each test, you have a brief description of what your application must do in order for the test suits pass.

If you have questions about what the tests are, and how to interpret them, take a look at **[Rocketseat FAQ](https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/faq-challenges).**

For this challenge we have the following tests:

- **`should be able to list the products`**: In order for this test to pass, your application must allow all products that are returned from the Fake API to be listed on your `Dashboard` screen. This listing should display the `title` and the `price` that must be formatted using the `Intl` function.

- **`should be able to add a product to the cart`**: For this test to pass, you must allow it to be possible to add products from your `Dashboard` to the cart, using the `cart` context provided.

- **`should be able to list the products on the cart`**: For this test to pass, you must allow it to be possible to list the products that are saved in the context of your cart on the `Cart` page, on that page display the product name and the total subtotal of each product (price \* quantity).

- **`should be able to calculate the cart total`**: For this test to pass, both on the `Dashboard` page and on the `Cart` page you must display the total value of all the items that are in your cart .

- **`should be able to show the total quantity of items in the cart`**: For this test to pass, both on the `Dashboard` page and on the `Cart` page you must display the total number of items that are in your cart.

- **`should be able to increment product quantity on the cart`**: In order for this test to pass, you must allow it to be possible to increase the quantity of a product in your cart, using the context of `cart` provided.

- **`should be able to decrement product quantity on the cart`**: In order for this test to pass, you must allow it to be possible to decrease the quantity of a product in your cart, using the context of the `cart` provided.

- **`should be able to navigate to the cart`**: In order for this test to pass, in its `FloatingCart` component on the Dashboard, you must allow that by clicking on the cart button with the testID of `navigate-to-cart-button`, the user is redirected to the `Cart` page.

- **`should be able to add products to the cart`**: For this test to pass, in your file containing the cart context, you must allow the ʻaddToCart` function to add a new item to the cart.

- **`should be able to increment quantity`**: For this test to pass, in your file containing the cart context, you must allow the `increment` function to increase the quantity of an item by `1` unit that is stored in the context.

- **`should be able to decrement quantity`**: For this test to pass, in your file containing the cart context, you must allow the function `decrement` to decrease by `1` the quantity of an item that is stored in the context.

- **`should store products in AsyncStorage while adding, incrementing and decrementing`**: For this test to pass, in your file containing the cart context, you must allow all updates you make to the cart to be saved in the AsyncStorage. For example, when adding an item to the cart, add it to AsyncStorage as well. Remember to also update the AsyncStorage value when you increase or decrease the quantity of an item.

- **`should load products from AsyncStorage`**: For this test to pass, in your file containing the cart context, you must allow all products that have been added to be fetched from AsyncStorage.

## :cd: Installed packages

The following is a list of installed packages:

- [react](https://reactjs.org/)
- [react-native](https://github.com/facebook/react-native#readme)
- [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler#readme)
- [react-native-reanimated](https://github.com/software-mansion/react-native-reanimated#readme)
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context#readme)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [typescript](https://www.typescriptlang.org/)
- [jest](https://jestjs.io/)
- [ts-jest](https://kulshekhar.github.io/ts-jest)
- [babel-jest](https://github.com/facebook/jest#readme)
- [metro-react-native-babel-preset](https://github.com/facebook/metro#readme)
- [axios](https://github.com/axios/axios)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter#readme)
- [intl](https://github.com/andyearnshaw/Intl.js#readme)
- [json-server](https://github.com/typicode/json-server)
- [styled-components](https://styled-components.com/)

	Optional
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [eslint-import-resolver-typescript](https://github.com/alexgorbatchev/eslint-import-resolver-typescript#readme)
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme)
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

## :memo: Licence

This project is under license from MIT. See the archive [LICENSE](LICENSE) to more details.
