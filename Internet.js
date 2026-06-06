let internet = true;
let messagePromise = new Promise(function(resolve, reject) {

    if(internet) {
        resolve("Message Delivered Successfully");
    } else {
        reject("Message Delivery Failed");
    }

});

messagePromise
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });