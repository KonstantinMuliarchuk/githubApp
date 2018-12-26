import {takeLatest, takeEvery, call, put} from 'redux-saga/effects'
import { LOAD_HOME, RECEIVE_HOME_DATA, ERROR_RECEIVING_HOME_DATA, RECEIVE_MORE_HOME_DATA, LOADER_ON, LOADER_OFF } from '../../utils/constants';
import { fetchHome } from '../../api/fetchHomeData';

export function* watchLoadHomeData () {
    yield takeLatest(LOAD_HOME,fetchHomeData)
}


function* fetchHomeData(action) {
    yield put({type: LOADER_ON})
    const data = yield call(()=>fetchHome(action.payload))
    if(data.data) {
        if (action.payload.page === 1) {
            yield put({type: RECEIVE_HOME_DATA, payload: data.data})
            yield put({type: LOADER_OFF})
        }else{
            yield put({type: RECEIVE_MORE_HOME_DATA, payload: data.data})
            yield put({type: LOADER_OFF})
        }
    }else {
        yield put({type: ERROR_RECEIVING_HOME_DATA, payload: data.Error})
        yield put({type: LOADER_OFF})
    }
    
}