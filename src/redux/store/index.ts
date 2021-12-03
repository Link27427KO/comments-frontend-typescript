import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'

const isProduction = process.env.NODE_ENV === 'production'
const history = createBrowserHistory();

const middleware = routerMiddleware(history)

export let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, middleware))
)

if (isProduction) {
    store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk, middleware))
    )
}

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>