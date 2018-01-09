import BooksAPI from '../utils/BooksAPI';

export const SEARCH = 'SEARCH';

export function searchBooks( query, books ) {
  return { type: SEARCH, query, books };
}

export function fetchSearch( query ) {
  return function ( dispatch ) {
    BooksAPI
      .search( query, 25 )
      .then( ( books ) => {
        books.length > 0
          ? dispatch( searchBooks( query, books ) )
          : dispatch( searchBooks( query, [] ) )
      } )
  }
}
