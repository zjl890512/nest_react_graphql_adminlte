import React, {Component} from 'react';
import Hello from 'components/Hello/Hello';

export default class Home extends Component {
    render() {
        return (
            <div>
                this1 is home123~
                <Hello name="Kylong" />
            </div>
        )
    }
}