import BooksAPI from '../utils/BooksAPI';

export const ALL = 'ALL';
export const GET_DETAIL = 'GET_DETAIL';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export function allBooks( shelf ) {
  return { type: ALL, shelf };
};

export function getDetail( book ) {
  return { type: GET_DETAIL, book, };
};

export function updateBook( book, shelf ) {
  return { type: UPDATE_BOOK, book, shelf };
};

export function getAllBooks( page ) {
  return function ( dispatch ) {
    BooksAPI
      .getAll()
      .then( ( books ) => {
        dispatch( allBooks( { books } ) );
        page.setState( { loading: false } );
        return true;
      }, ( error ) => {
        return false;
      } )
  }
}
