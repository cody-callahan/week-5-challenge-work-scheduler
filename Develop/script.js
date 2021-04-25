// get current date

var currentDate = document.querySelector("#currentDay");
var today = moment();
currentDate.textContent = today.format("MMM DD, YYYY");

// 
var auditCard = function(cardEl) {
// debugger;
    // get time from task element
    var hour = $(cardEl)
      .find("time")
      .attr("datetime")
      .replace(":00", '');
  
      console.log(time);
      // convert to moment object at 5:00pm
      // convert to moment object at 5:00pm
      var time = moment().set("hour", hour);


    //   var momentTime = moment(time, "HH:mm")
    //   console.log(momentTime);

    // remove any old classes from element
    $(cardEl).removeClass("list-group-item-warning list-group-item-danger");
  
    // apply new class if task is near/over due date
    if (moment().isAfter(time)) {
      $(cardEl).addClass("list-group-item-danger");
    } 
    else {
      $(cardEl).addClass("list-group-item-warning");
    }
  };
  
  setInterval(function () {
    $(".card").each(function(index, el) {
        auditCard(el);
    });
  }, 5000);