myPromise
  .then(result => {
    console.log(result); // Output: "Operation successful!" (if resolved)
  })
  .catch(error => {
    console.log(error); // Output: "Operation failed!" (if rejected)
  });
