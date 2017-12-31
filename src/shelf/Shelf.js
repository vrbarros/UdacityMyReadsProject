import React, {Component} from 'react';
import ShelfItem from './ShelfItem';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';

class Shelf extends Component {
  state = {
    // Set the categories structure according with API
    categories: [
      {
        category: 'Currently Reading',
        id: "currentlyReading"
      }, {
        category: 'Read',
        id: 'read'
      }, {
        category: 'Want to Read',
        id: 'wantToRead'
      }, {
        category: 'None',
        id: 'none'
      }
    ],
    // Set the other states reducers
    loading: true
  }
  componentDidMount() {
    // Get all books and update store
    this.props.fetchAllBooks(this);
  }
  separateByCategories(book, category) {
    // Check if book shelf is the same of category id
    return book.shelf === category.id;
  }
  render() {
    var state = this.state;
    var self = this;
    var shelf = this.props.shelf;

    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            state
              .categories
              .map((cat, c) => (<div key={cat.id} className="bookshelf">
                <h2 className="bookshelf-title">{cat.category}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                      state.loading === false
                        ? (shelf.books.map((book, b) => ((
                          self.separateByCategories(book, cat) === true
                          ? (<li key={book.id}><ShelfItem index={b} book={book} /></li>)
                          : false))))
                        : <ReactLoading key={cat.id} type='cubes' color='#000000' delay={0} height='50px' width='50px'/>
                    }
                  </ol>
                </div>
              </div>))
          }
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">add a book</Link>
      </div>
    </div>)
  }
}

export default Shelf
