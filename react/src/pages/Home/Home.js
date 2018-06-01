import React, {Component} from 'react';
import Hello from 'component/Hello/Hello';

export default class Home extends Component {
    render() {
        return (
            <div>
                this1 is home~
                <Hello name="Kylong" />
            </div>
        )
    }
}