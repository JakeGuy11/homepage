console.log("==========================================");
console.log("Welcome to Jake's custom Firefox homepage!");
console.log("==========================================");

var randomImageIndex = Math.round(Math.random() * (7.499 - 1) + 1);
console.log("Generated index " + randomImageIndex);
document.body.style.backgroundImage = "url('res/image" + randomImageIndex + ".jpg')";
