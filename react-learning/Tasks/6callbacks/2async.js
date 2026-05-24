function fetchData(callback) {
    setTimeout(function() {
      const data = { name: "Alice" };
      callback(data); // Passing data to the callback function
    }, 2000); // Simulating a delay with setTimeout
  }
  
  fetchData(function(data) {
    console.log("Received data:", data);
  });
  // Output after 2 seconds: Received data: { name: "Alice" }
  
//   Here, fetchData simulates a data fetch that takes 2 seconds. Once done, it calls the callback function with the fetched data, allowing us to process the data only when it’s available.