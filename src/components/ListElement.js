/**
 * Created by react on 04.07.17.
 */

import React from 'react';

class ListElement extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>{this.props.element}</li>
        )
    }
}

export default ListElement;