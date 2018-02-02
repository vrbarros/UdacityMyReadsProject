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
    this.state = {
      isLoading: true,
    };
    this.onInputChange = this
      .onInputChange
      .bind(this);
  };

  componentWillMount() {
    // Get all books and update store
    this.props.fetchAllBooks()
  };

  onInputChange(event) {
    // Show the loading
    this.setState({isLoading: true})
    // Get the query from input field
    const query = event.target.value;
    const {fetchSearch, emptySearch} = this.props;
    // Only do search if value if diff from empty
    if (query.length > 2) {
      // Run the query
      fetchSearch(query) 
      this.setState({isLoading: false})
      
    } else {
      emptySearch()
      this.setState({isLoading: true})
    }
  };

  render() {

    const {isLoading} = this.state
    const {results} = this.props.search
    const {books} = this.props.shelf

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input type="text" placeholder="Search by title or author" onChange={this.onInputChange} />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {isLoading ? (false) : (
            <h2 style={{
              textAlign: 'center'
            }}>Search returned { results ? (results.length) : ("...") } books. You already have { books ? (books.length) : (0) } different books in the shelf!</h2>
          )}
          <ol className="books-grid">
            {isLoading ? (<ReactLoading type='cubes' color='#000000' delay={0} height='50px' width='50px' />) : ( 
              results ? 
              (results.map((book, i) => (
              <li key={book.id}><ShelfItem book={book} index={i} /></li>
              ))) : (false)
            )
            }
          </ol>
        </div>
      </div>
    )
  }
}

// Replicate all states to props
function mapStateToProps(state) {
  return {shelf: state.shelf, search: state.search}
}

// Connect redux feature
export default withRouter(connect(mapStateToProps)(Search))
