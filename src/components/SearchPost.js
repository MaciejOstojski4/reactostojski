/**
 * Created by react on 04.07.17.
 */
import React from "react";

class SearchPost extends React.Component {

    search = (e) => {

        this.props.onSearch(e.target.value)
    };

    render() {
        return (
            <input onChange={this.search} type="text" placeholder="Search..." />
        )
    }
}

export default SearchPost;
