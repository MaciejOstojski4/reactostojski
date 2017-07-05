/**
 * Created by react on 05.07.17.
 */
import React from "react";
import SearchPost from "./SearchPost";

class BlogHeader extends React.Component {

    render() {
        return (
            <div className="navbar navbar-default">
                <div class="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">Blog</span>
                    </div>
                    <div className="navbar-form navbar-left">
                        <SearchPost onSearch={this.props.onSearch}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogHeader;
