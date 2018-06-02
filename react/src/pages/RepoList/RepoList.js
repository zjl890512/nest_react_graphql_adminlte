import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRepoList} from "actions/repoList";

class RepoList extends Component {

    render() {
        const {repoList, isLoading, errorMsg} = this.props.repoList;
        let content = '';
        if(isLoading){
            content = <span>请求信息中......</span>
        } else if(errorMsg){
            content = <span>{content}</span>
        } else {
            content = '';
            console.log('-----------------');
            console.log(repoList.items);
            console.log('-----------------');
            if(repoList.items){
                let repos = repoList.items;
                let repoItems = repos.map(function (repo, index) {
                    return (
                        <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
                    );
                });
                content = <ol>{repoItems}</ol>;
                console.log(content);
            }

        }
        return (
            <div>
                {content}
                <button onClick={() => this.props.getRepoList()}>请求资源库列表</button>
            </div>
        )
    }
}

export default connect((state) => ({repoList: state.repoList}), {getRepoList})(RepoList);