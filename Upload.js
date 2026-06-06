let uploadSuccess = true;

let uploadPromise = new Promise(function(resolve, reject) {

    if(uploadSuccess) {
        resolve("Image uploaded to WhatsApp Status successfully");
    } else {
        reject("Image upload failed");
    }

});
uploadPromise
    .then(function(result) {
        console.log(result);
    })

    .catch(function(error) {
        console.log(error);
    })

    .finally(function() {
        console.log("Upload process completed");
    });