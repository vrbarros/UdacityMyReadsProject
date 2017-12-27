import BooksAPI from '../utils/BooksAPI'

export const ALL = 'ALL'
export const GET_DETAIL = 'GET_DETAIL'
export const UPDATE_BOOK = 'UPDATE_BOOK'

export function allSuccess( books ) {
  return { type: ALL, books };
}

export function fetchAll() {
  return BooksAPI.getAll().then(data => {
    return data
  });
}
