const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Operation successful!"); // Promise is fulfilled
      } else {
        reject("Operation failed!"); // Promise is rejected
      }
    }, 2000);
  });
  