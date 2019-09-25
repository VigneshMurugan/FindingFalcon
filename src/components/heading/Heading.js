import React from "react";

const styles ={
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    margin: '0 auto'
}
export class Heading extends React.Component {
    render() {
        return <center style={styles}>{this.props.headingText}</center>;
    }
}
