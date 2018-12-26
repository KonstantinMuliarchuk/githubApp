import { BTN_SPINNER_ON, BTN_SPINNER_OFF, LOADER_ON, LOADER_OFF } from "../../utils/constants";

const initialState = {
    btnSpinnerOn: false,
    loader: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case BTN_SPINNER_ON:
            return { ...state, btnSpinnerOn: true }
        case BTN_SPINNER_OFF:
            return { ...state, btnSpinnerOn: false }
        case LOADER_ON:
            return { ...state, loader: true }
        case LOADER_OFF:
            return { ...state, loader: false }
        default:
            return state
    }
}