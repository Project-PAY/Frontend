import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import routes from '../pages/routes/routes';
import baseStyles from '../styles/base.styles';
import fontStyles from '../styles/font.styles';
import './index.css';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes}/>
    <style jsx global>{fontStyles}</style>
    <style jsx global>{baseStyles}</style>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
