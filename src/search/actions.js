import BooksAPI from '../utils/BooksAPI'

export const SEARCH = 'SEARCH'

export function fetchSearch( value ) {
  return function ( dispatch ) {
    return BooksAPI
      .search(value)
      .then( books => {
        dispatch( searchSuccess( books ) );
      } )
      .catch( error => {
        throw( error );
      } );
  };
}

export function searchSuccess( books ) {
  return { type: SEARCH, books, };
}
