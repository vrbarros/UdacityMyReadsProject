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
  componentDidMount() {
    console.log(this.props)
  }
  changeShelf(book, shelf) {
    // Run the update command API
    this
      .props
      .fetchUpdateBook(book, shelf)
  }
  render() {
    const {book} = this.props;

    var shelf;

    // Check if there is a shelf value to set
    if (book.shelf) {
      // If exist, set the shelf with the value
      shelf = book.shelf;
    } else {

      shelf = 'none';
    }

    return (<div className="book-shelf-changer">
      <select defaultValue={shelf} onChange={(event) => this.changeShelf(book, event.target.value)}>
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
  return {shelf: state.shelf, search: state.search}
}

// Dispatch actions to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...shelfActions
  }, dispatch)
}

// Connect redux feature
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChangerControl))
