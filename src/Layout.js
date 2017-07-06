import React from "react";
import BlogHeader from "./components/BlogHeader"

class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    refreshCounter = (val) => {
        this.setState({
            counter: val
        })
    };

    render() {

        return (
            <div>
                <BlogHeader postsQuantity={this.state.counter} />
                {        React.Children.map(this.props.children, c => {
                    return React.cloneElement(c, {callbackFromLayout: () => this.refreshCounter})
                })}
            </div>
        )
    }
}

export default Layout;
