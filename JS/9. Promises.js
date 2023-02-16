function fetchData() {
    return new Promise((resolve, reject) => {
      fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
  
  fetchData().then(data => console.log(data)).catch(error => console.error(error)); 