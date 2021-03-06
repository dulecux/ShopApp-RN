import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import ReduxThunk from 'redux-thunk';

import productsReducer from './src/store/reducers/products';
import NavigationContainer from './src/navigation/NavigationContainer'
import cartReducer from './src/store/reducers/cart';
import ordersReducer from './src/store/reducers/orders';
import authReducer from './src/store/reducers/auth';

enableScreens();

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {

  return  Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={() => setFontLoaded(true)} 
              onError={(err) => console.log(err) }
            />;
  }

  return (
   <Provider store={store}>
      <NavigationContainer />
   </Provider>
  );
}

