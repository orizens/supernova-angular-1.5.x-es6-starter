/* @ngInject */
export default function SomeService ($http) {
  const url = 'https://www.googleapis.com/youtube/v3/search';
  const exports = {
    search
  };

  return exports;

  ///////////////

  function search (query){
    return $http.get(url, {
      params: { q: query }
    });
  }
}
