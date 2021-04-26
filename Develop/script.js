// var tasks = [];

var tasks = JSON.parse(localStorage.getItem('tasks'))

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
  
    // apply new class if card present (same hour), past or future
    if (moment().format("HH") === hour) {
        $(cardEl).addClass("list-group-item-danger");
    }
    if (moment().isAfter(time)) {
      $(cardEl).addClass("list-group-item-secondary");
    } 
    else {
      $(cardEl).addClass("list-group-item-success");
    }
  };
  
//   setInterval(function () {
//     $(".card").each(function(index, el) {
//         auditCard(el);
//     });
//   }, 000);

  $(".card").each(function(index, el) {
    auditCard(el);
  });


  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // save button
  $(".card-button").click(function(){
    
    var hour = this.getAttribute('id');
    var task = $('#task-'+hour).val();


    tasks.push({
        time: hour,
        txt: task
      });
    

    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log(tasks)

  })

  for (let index = 0; index < tasks.length; index++) {
      var hour = tasks[index].time
      $('#task-'+hour).val(tasks[index].txt);
  }

  
  

//   $(".list-group").on("click", "p", function() {
//     // get current text of p element
//     var text = $(this)
//       .text()
//       .trim();
  
//     // replace p element with a new textarea
//     var textInput = $("<textarea>").addClass("form-control").val(text);
//     $(this).replaceWith(textInput);
  
//     // auto focus new element
//     textInput.trigger("focus");
//   });
  