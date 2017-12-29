import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Rating from 'react-rating';

class ShelfItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    book: PropTypes.object.isRequired
  }
  render() {

    const {book, index} = this.props;

    return (<div className="book">
      <center>
        <Rating empty="fa fa-star-o fa" full="fa fa-star"></Rating>
      </center>
      <div className="book-top">
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}></div>
        <div className="book-shelf-changer">
          <select>
            <option value="none" disabled="disabled">Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]}</div>

    </div>);
  }
}

export default ShelfItem
