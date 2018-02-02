import BooksAPI from '../utils/BooksAPI';

export const SEARCH = 'SEARCH';
export const EMPTY_SEARCH = 'EMPTY_SEARCH';

export function searchBooks( query, books ) {
  return { type: SEARCH, query, books };
}

export function emptySearch( ) {
  return { type: EMPTY_SEARCH };
}

export function fetchSearch( query ) {
  return function ( dispatch ) {
    BooksAPI
      .search( query )
      .then( ( books ) => {
        if (books.length > 0) {
          dispatch( searchBooks( query, books ) )
          return true;
        } else {
          dispatch( searchBooks( query, [] ) )
          return false;
        }
      } )
  }
}
