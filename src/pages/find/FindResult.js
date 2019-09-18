import React from "react";
import config from "config/config";
export class FindResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const statusMessage = this.props.status == "success" ? config.SUCCESS_MESSAGE : config.FAILURE_MESSAGE;
        if (!this.props.isAuthorized)
            this.props.history.push('/');
        return (this.props.status != undefined ? (<div className="container resultContainer">
            <div>{statusMessage}</div>
            <div>{'Time Taken:  ' + this.props.timeTaken}</div>
            <div>{this.props.planet_name ? ('Planet Found: ' + this.props.planet_name) : ''}</div>
        </div>) : <div className="loaderContainer loader"></div>);
    }
}
