// This displays today's day and date
var todayDate = dayjs().format('dddd, MMM DD, YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
    // This is the saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // This will get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // This saves the text in local storage
        localStorage.setItem(time, text);
        console.log("You added an activity!")
    })
   
    function timeTracker() {
        // This will pull the current number of hours.
        var timeNow = dayjs().hour();

        // This will loop over the time blocks.
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // This checks the time and adds the classes for background indicators.
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }
    // This function will get the items from local storage and display it.
    function displayText() {
      // This will loop over the time blocks
      $(".time-block").each(function () {

        var blockHour = $(this).attr("id");
        $(this).children(".description").val(localStorage.getItem(blockHour));
      });
    }
    displayText();
    
    });
