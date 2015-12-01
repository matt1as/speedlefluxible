import React from 'react';
import listClassifieds from '../actions/listClassifieds';

var debug = require('debug')('Speedle:component/searchBar');

var hasSearched = false;
class SearchBar extends React.Component {



  handleSearchEntry (event) {
    var query = event.target.value;
    if( query.length >= 3) {
      context.getComponentContext().executeAction(listClassifieds, {query:query});
      hasSearched = true;
    } else if (hasSearched == true) {
      hasSearched = false;
      context.getComponentContext().executeAction(listClassifieds);
    }

  }

  render () {
    return (
        <div className="search-wrapper">
            <input type="search" ref="searchKey" className="form-control"
                placeholder="Enter a partial beer, style, or brewery name"
                onChange={this.handleSearchEntry.bind(this)}
                />
            <button className="btn btn-link" ><span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={this.clearText}></span></button>
        </div>
    );
  }
}

export default SearchBar;
