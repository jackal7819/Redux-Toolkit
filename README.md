## Redux Toolkit Project

This repository contains the code for a React project built using Redux Toolkit.

### Redux Toolkit Overview

The Redux Toolkit package comprises several libraries that are used in this project:

- `redux`: Core library for state management
- `immer`: Allows state mutation
- `redux-thunk`: Handles asynchronous actions
- `reselect`: Simplifies reducer functions

#### Store Configuration

To set up the Redux store, create `store.js`:

```js
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {},
});
```

To integrate the store into your app, modify `index.js`:

```js
import { store } from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

### Application Features

The application includes a cart feature, which involves creating a `cartSlice.js` file to manage the cart state.

### Development Notes

- Utilizes React-Redux to connect the app with Redux state management.
- Implements Redux DevTools extension for debugging.
- Utilizes combined reducers to manage different slices of the application state.

### How to Use

- Create `CartItem` and `CartContainer` components for managing cart items.
- Implements functionalities like adding, removing, increasing, and decreasing cart items.

### Additional Functionalities

- Uses Hero Icons for visual elements in the app.
- Provides a modal for confirmation during specific actions.

### Async Functionality

Integrates asynchronous functionalities using `createAsyncThunk` to manage API calls and handle asynchronous actions, fetching data from an external source.
