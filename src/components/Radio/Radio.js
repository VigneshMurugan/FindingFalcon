import React from "react";

export class Radio extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (<div key={this.props.id} className="column">
            <input 
                type="radio" 
                name={this.props.id} 
                value={this.props.name} 
                disabled={this.props.disabled} 
                onChange={this.props.onChange} 
            />
            <label>{this.props.label || ''}</label>
        </div>);
    }
}
