import { NAVIGATE } from "../../utils/constants";
import {takeLatest, call} from 'redux-saga/effects'
import { navigateToScreen, goHome, goToAuth, showModal, dismissModal } from "../../utils/navigation";

export function* watchNavigation () {
    yield takeLatest(NAVIGATE,navigate)
}


function* navigate(action) { 
    
    if (action.payload.route) {
        yield call(()=>navigateToScreen(action.payload))
     } else if (action.payload.modal){
        yield call(()=>showModal(action.payload))
     }else if(action.payload.dismiss){
        yield call(()=>dismissModal(action.payload))
    }else{
       if (action.payload.goHome) {
        yield call(()=> goHome())
       }
       if (action.payload.goToAuth) { 
        yield call(()=> goToAuth())
       }
    }
    
    
}