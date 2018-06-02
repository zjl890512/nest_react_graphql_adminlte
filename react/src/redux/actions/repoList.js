export const GET_REPO_LIST_REQUEST = "repoList/GET_REPO_LIST_REQUEST";
export const GET_REPO_LIST_SUCCESS = "repoList/GET_REPO_LIST_SUCCESS";
export const GET_REPO_LIST_FAIL = "repoList/GET_REPO_LIST_FAIL";

export function getRepoList() {
    return {
        types: [GET_REPO_LIST_REQUEST, GET_REPO_LIST_SUCCESS, GET_REPO_LIST_FAIL],
        promise: client => client.get(`https://api.github.com/search/repositories?q=javascript&sort=stars`)
    }
}