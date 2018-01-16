import React, {Component} from 'react'
import PropTypes from 'prop-types';
import ChangerControl from './ChangerControl'

class ShelfItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    book: PropTypes.object.isRequired,
  }
  render() {

    const {book, index} = this.props;

    return (<div className="book">
      <div className="book-top" key={index}>
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}></div>
        <ChangerControl book={book}></ChangerControl>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{ (book.authors) ? book.authors[0] : '-' }</div>
    </div>);
  }
}

export default ShelfItem
