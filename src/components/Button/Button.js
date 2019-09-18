import React from "react";
import { buttonStyle } from "./index";

export class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div key={this.props.id} style={buttonStyle}>
            <input type="button" value={this.props.name} disabled={this.props.disabled} onClick={this.props.onClick} />
        </div>);
    }
}
