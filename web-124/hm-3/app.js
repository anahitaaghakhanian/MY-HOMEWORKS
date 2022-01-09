var time = prompt("Welcome! Please tell me what is the time:");
var $output = document.getElementById('output');



if(time == 8) {
html = "<span>Wake up!</span>";
} else if(time == 9) {
html = "<span>Wake up!</span>";


} else if(time == 10) {
html ="<span>Go to work!</span>";
} else if(time == 11) {
html ="<span>Go to wotk!</span>";


} else if(time == 12) {
html ="<span>Lunch time!</span>";


} else if(time == 13) {
html ="<span>Go to work!</span>";
} else if(time == 14) {
html ="<span>Go to work!</span>";
} else if(time == 15) {
html ="<span>Go to work!</span>";
} else if(time == 16) {
html ="<span>Go to work!</span>";


} else if(time == 17) {
html ="<span>Go to the Gym!</span>";
} else if(time == 18) {
html ="<span>Go to the Gym!</span>";


} else if(time == 19) {
html ="<span>Dinner time!</span>";


} else if(time == 20) {
html ="<span>Time to watch TV</span>";
} else if(time = 21) {
html ="<span>Time to watch TV</span>";


} else if(time >= 22) {
html ="<span>Time to go to sleep!</span>";
} else {
html ="<span>You should be sleeping now!</span>";
}


$output.innerHTML = html;
