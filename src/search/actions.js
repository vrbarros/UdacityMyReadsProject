import BooksAPI from '../utils/BooksAPI';

export const SEARCH = 'SEARCH';

export function searchBooks( query, books ) {
  return { type: SEARCH, query, books, };
}

export function fetchSearch( query, page ) {
  return function ( dispatch ) {
    BooksAPI
      .search( query )
      .then( ( books ) => {
        dispatch( searchBooks( query, books ) );
        page.setState( { loading: false } );
        return true;
      }, ( error ) => {
        return false;
      } )
  }
}
