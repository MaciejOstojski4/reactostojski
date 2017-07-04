/**
 * Created by react on 04.07.17.
 */

import React from 'react';
import PropTypes from 'prop-types';

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

ListElement.propTypes = {
    element: PropTypes.string.isRequired
};

ListElement.defaultProps = {
    element: "default value"
};

export default ListElement;