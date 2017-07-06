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
            <div className="col-md-4 col-md-offset-3 text-center">
                <form>
                    <label><h2>Search</h2></label>
                    <input className="form-control" onChange={this.search} type="text" placeholder="Search..." />
                </form>
            </div>
        )
    }
}

export default SearchPost;
