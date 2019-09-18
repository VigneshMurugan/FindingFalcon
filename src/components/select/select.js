import React from "react";

export class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<select id={this.props.id} onChange={this.props.onChange}>
            <option value=''>Select</option>
            {this.props.options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>);
    }
}
