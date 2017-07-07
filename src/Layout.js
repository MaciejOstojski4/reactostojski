import React from "react";
import BlogHeader from "./post/BlogHeader"

class Layout extends React.Component {

    render() {

        return (
            <div>
                <BlogHeader />
                {this.props.children}
            </div>
        )
    }
}

export default Layout;
