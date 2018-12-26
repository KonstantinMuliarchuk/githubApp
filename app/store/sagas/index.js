import { all } from 'redux-saga/effects'
import { watchLoadHomeData } from './homeLoaderSaga';

export function* rootSaga() {
    yield all([
        watchLoadHomeData()
    ])
}