import React from 'react';

var HelloSayer = React.createClass({
    render: function() {
        return (<p>HEkajsdhkjashdkI {this.props.name}!</p>);
    }
});

export default HelloSayer;