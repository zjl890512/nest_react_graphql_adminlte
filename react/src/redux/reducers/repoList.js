import {GET_REPO_LIST_REQUEST, GET_REPO_LIST_SUCCESS, GET_REPO_LIST_FAIL} from 'actions/repoList'

const initState = {
    isLoading: false,
    repoList: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    console.log(action);
    switch (action.type){
        case GET_REPO_LIST_REQUEST :
            return {
                ...state,
                isLoading: true,
                repoList: {},
                errorMsg: ''
            };
        case GET_REPO_LIST_SUCCESS :
            return {
                ...state,
                isLoading: false,
                repoList: action.result.data,
                errorMsg: ''
            };
        case GET_REPO_LIST_FAIL :
            return {
                ...state,
                isLoading: false,
                repoList: action.result.data,
                errorMsg: '请求错误'
            };
        default:
            return state;
    }
}