import { AUTHORIZED } from "../../utils/constants";

const initialState = {
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZED:
            return { ...state, token: action.payload }
        default:
            return state
    }
}