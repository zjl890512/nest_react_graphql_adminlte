import counter from 'reducers/counter';
import userInfo from 'reducers/userInfo';
import repoList from 'reducers/repoList';

export default function combineReducers(state = {}, action) {
    return {
        counter: counter(state.counter, action),
        repoList: repoList(state.repoList, action),
        userInfo: userInfo(state.userInfo, action)
    }
}