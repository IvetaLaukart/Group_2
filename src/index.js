import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Blog from './Blog'
import store, { persistor } from './redux/reducers/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Blog />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

