import React, {Component} from 'react'
import ShelfItem from './ShelfItem'

class Shelf extends Component {
  state = {
    categories: ['Currently Reading', 'Read', 'Want to Read']
  }
  componentDidMount() {
    //fetchAll
  }
  render() {
    return (<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {
            this
              .state
              .categories
              .map((cat, index) => (<div className="bookshelf">
                <h2 className="bookshelf-title">{cat}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <ShelfItem key={cat}/>
                    </li>
                  </ol>
                </div>
              </div>))
          }
        </div>
      </div>
      <div className="open-search">
        <a href="/search">Add a book</a>
      </div>
    </div>)
  }
}

export default Shelf
