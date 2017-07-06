import React from "react";
import BlogHeader from "./components/BlogHeader"

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
