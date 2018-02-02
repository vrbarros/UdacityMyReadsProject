import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'
import * as shelfActions from './actions';

// redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class ChangerControl extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props);

    this.changeShelf = this
      .changeShelf
      .bind(this);
  };
  changeShelf(book, shelf) {
    // Run the update command API
    this
      .props
      .fetchUpdateBook(book, shelf)
  }

  checkShelf(books, book) {
    // Check if the book exist inside the shelf
    var shelf
    books.map(function(item, i) {
      if (item.id === book.id) {
        shelf = item.shelf;
      }
    })
    // If exist, return the position, if not, return none
    if (shelf) {
      return shelf
    } else {
      return "none"
    }
  }

  render() {
    
    const {book} = this.props;
    const {books} = this.props.shelf;
    var setShelf = this.checkShelf(books, book)  

    return (<div className="book-shelf-changer">
      <select defaultValue={setShelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
        <option disabled="disabled">Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>);
  }
}

// Replicate all states to props
function mapStateToProps(state) {
  return {search: state.search, shelf: state.shelf}
}

// Dispatch actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...shelfActions
  }, dispatch)
}

// Connect redux feature
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangerControl))
