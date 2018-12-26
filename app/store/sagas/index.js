import { all } from 'redux-saga/effects'
import { watchLoadHomeData } from './homeLoaderSaga';
import { watchNavigation } from './navigationSaga';

export function* rootSaga() {
    
    yield all([
        watchLoadHomeData(),
        watchNavigation()
    ])
}