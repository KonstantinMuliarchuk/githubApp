import { RECEIVE_HOME_DATA, LOAD_HOME, RECEIVE_MORE_HOME_DATA } from "../../utils/constants";
import { filterExistingOrders } from "../../utils/filteringExistingRepos";

const initialState = {
    repositories: null,
    page: 1
}

export default (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_HOME_DATA:
            return { ...state, repositories: action.payload.items }
        case RECEIVE_MORE_HOME_DATA:
            let repositories = filterExistingOrders(state.repositories, action.payload.items)
            return { ...state, repositories}
        default:
            return state
    }
}