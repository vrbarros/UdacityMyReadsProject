export const SEARCH = 'SEARCH';

export function searchBooks( query, books ) {
  return { type: SEARCH, query, books };
}
