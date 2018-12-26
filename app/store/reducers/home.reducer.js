import { RECEIVE_HOME_DATA, LOAD_HOME, RECEIVE_MORE_HOME_DATA } from "../../utils/constants";

const initialState = {
    repositories: null,
    page: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_HOME_DATA:
            return { ...state, repositories: action.payload.items }
        case RECEIVE_MORE_HOME_DATA:
            return { ...state, repositories: [...state.repositories, ...action.payload.items]}
        default:
            return state
    }
}