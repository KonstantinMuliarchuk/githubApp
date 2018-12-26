import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import Reducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './sagas/index'
import { watchLoadHomeData } from './sagas/homeLoaderSaga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Reducer ,applyMiddleware(
    
        sagaMiddleware,
        logger
    ))

    sagaMiddleware.run(rootSaga)

export const action = (type, payload) => store.dispatch({type, payload})
export default store;