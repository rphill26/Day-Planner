$("#currentDate").text(moment().format("dddd, MMMM Do"));

// Fucntion to display different colors on each time block and associate a time with a time block ID
display = () => {

    var currentBGTime = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm", "5pm"];

    var currentBGHours = [9,10,11,12,13,14,15,16,17];

    var currentTime = moment();

    // For loop to determine the status (current, past, or future) of each time block
    for (var i =0; i < 9; i++){
        $("#" + currentBGTime[i]).val(localStorage.getItem(currentBGTime[i] + "inputBG"));
        
        if (currentBGHours[i] === currentTime.hour()) {
            $("#" + currentBGTime[i]).css("background-color", "#c70a0a");
        } else if (currentBGHours[i] < currentTime.hour()){
            $("#" + currentBGTime[i]).css("background-color", "#b8b3b3");
        } else if (currentBGHours[i] > currentTime.hour()){
            $("#" + currentBGTime[i]).css("background-color", "#54cA93");
        };
    };
};

display();

// Using IDs to get values from local storage
$("#9am").val(localStorage.getItem("#9am"));
$("#10am").val(localStorage.getItem("#10am"));
$("#11am").val(localStorage.getItem("#11am"));
$("#12pm").val(localStorage.getItem("#12pm"));
$("#1pm").val(localStorage.getItem("#1pm"));
$("#2pm").val(localStorage.getItem("#2pm"));
$("#3pm").val(localStorage.getItem("#3pm"));
$("#4pm").val(localStorage.getItem("#4pm"));
$("#5pm").val(localStorage.getItem("#5pm"));

// Function to save content into local storage
$(".btn").click(() => {
    let storeInput = $(this).val();
    localStorage.setItem(storeInput, $(storeInpiut).val());
});