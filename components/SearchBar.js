import React from 'react';


class SearchBar extends React.Component {

    render () {
        return (
            <div className="search-wrapper">
                <input type="search" ref="searchKey" className="form-control"
                    placeholder="Enter a partial beer, style, or brewery name"
                    />
                <button className="btn btn-link" ><span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={this.clearText}></span></button>
            </div>
        );
    }
}

export default SearchBar;
