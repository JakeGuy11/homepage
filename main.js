console.log("==========================================");
console.log("Welcome to Jake's custom Firefox homepage!");
console.log("==========================================");

var randomImageIndex = Math.round(Math.random() * (7.499 - 1) + 1);
console.log("Generated index " + randomImageIndex);
document.body.style.backgroundImage = "url('res/image" + randomImageIndex + ".jpg')";

function toggleHidden(){
	var schoolPanel = document.getElementById("schoolPanel");
	var personalPanel = document.getElementById("personalPanel");
	var hiddenSlide = document.getElementById("hiddenButtonTrack");

	if(schoolPanel.style.display === "none"){
		schoolPanel.style.display = "block";
		personalPanel.style.display = "none";
		hiddenSlide.style.display = "none";
	} else {
		personalPanel.style.display = "block";
		schoolPanel.style.display = "none";
		hiddenSlide.style.display = "block";
	}
}

function showHiddenPanels() {

}