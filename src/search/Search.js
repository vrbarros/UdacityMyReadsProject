import React, {Component} from 'react';
import ShelfItem from '../shelf/ShelfItem';
import {Link, withRouter} from 'react-router-dom';
import ReactLoading from 'react-loading';
import {Debounce} from 'react-throttle';

// redux
import {connect} from 'react-redux'

class Search extends Component {
  constructor(props) {
    super(props);

    this.onInputChange = this
      .onInputChange
      .bind(this);
  };
  componentDidMount() {
    // Get all books to guarantee to correct loading
    this
      .props
      .fetchAllBooks();
  }
  onInputChange(event) {
    // Show the loading
    this.show = false;
    // Get the query from input field
    const query = event.target.value;
    const {fetchSearch} = this.props;
    // Send message to console
    console.log("Search now...")
    // Only do search if value if diff from empty
    if (query.length > 0) {
      fetchSearch(query)
    }
  }
  render() {
    const {query, results} = this.props.search;
    var show = false;

    // Check if there is any value typed
    if (query.length > 0) {
      if (results.length > 0) {
        show = true;
      }
    }

    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
          }
          <Debounce time="400" handler="onChange">
            <input type="text" placeholder="Search by title or author" onChange={this.onInputChange}/>
          </Debounce>

        </div>
      </div>
      <div className="search-books-results">

        {
          show
            ? (<div>
              <h2 style={{textAlign: 'center'}}>Search returned {results.length} books...</h2>
              <ol className="books-grid">
                {results.map((book, i) => (<li key={book.id}><ShelfItem book={book} index={i}/></li>))}
              </ol>
            </div>)
            : (<ol className="books-grid"><ReactLoading type='cubes' color='#000000' delay={0} height='50px' width='50px'/></ol>)
        }

      </div>
    </div>)
  }
}

// Replicate all states to props
function mapStateToProps(state) {
  return {search: state.search}
}

export default withRouter(connect(mapStateToProps)(Search))
