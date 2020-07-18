import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';


const store = createStore(rootReducer,
  compose(
  applyMiddleware(thunk.withExtraArgument({  getFirestore, getFirebase })),
  reduxFirestore(firebase, fbConfig,
   {useFirestoreForProfile: true, userProfile: 'students', attachAuthIsReady: true})
  )
  );
  // {attachAuthIsReady: true}
  // {useFirestoreForProfile: true, userProfile: 'students'}

  const rrfProps = {
    firebase,
    config: fbConfig, 
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

// store.firebaseAuthIsReady.then(() => {

// })


ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider  { ...rrfProps }>
  {/* <React.StrictMode> */}
    <App />
    </ReactReduxFirebaseProvider>
  {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

