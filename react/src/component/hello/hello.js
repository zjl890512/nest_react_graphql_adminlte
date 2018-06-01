import React, {Component} from 'react';

export default class Hello extends Component {
    render() {
        return (
            <div>
                hello {this.props.name}<br/>
            </div>
        )
    }
}