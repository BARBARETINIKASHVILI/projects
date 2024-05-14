
const jaguarBox = document.getElementById("jaguarBox")
const box = document.getElementById("box")

function change (event){
    event.target.textContent = "The jaguar is the largest New World cat. It was once found in wooded regions from the U.S.-Mexican border south to Patagonia, Currently, the jaguar survives, in reduced numbers, only in remote areas of Central and South America; the largest known population is in the Amazon rain forest. The male is 5.5-9.0 ft. (1.7-2.7 m) long, including the tail, which measures 23-35-in. (60-90-cm) long, and weighs 220-350 lbs. (100-160 kg). The coat is typically orange-tan with black spots arranged in rosettes with a black spot in the center. A solitary predator, the jaguar usually hunts rodents, deer, birds, and fish; it will also take cattle, horses, and dogs.";
    document.getElementById("box").style.background = "rgba(255, 255, 255, 0.651)";
    document.getElementById("box").style.color = "black"
}


jaguarBox.addEventListener("click", change)