import { ACTION_GET_LIST } from "../actions";

const initState = { data: [] }

const user = (state = initState, action) => {

    const newState = state;

    // 判断 action 类型
    switch (action.type) {
        case ACTION_GET_LIST:

            return {
                ...newState,
                data: action.preload
            }

        default:
            return state;
    }
};

export default user;