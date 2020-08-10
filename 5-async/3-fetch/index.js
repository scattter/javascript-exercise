function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url).then(response => {
    if (response.status === 200) {
      return Promise.resolve(response.json());
    }
    return Promise.reject(new Error('Error'));
  });
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
