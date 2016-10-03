$(document).ready(function() {
      var count = 0;
      var startTimer = function(duration, display) {
          var timer = duration;
          var seconds = duration;
          setInterval(function() {
              if (seconds == 0) {
                $("#count-btn").hide();
                display.text("Pretty good");
                return;
              }
              seconds = seconds-1;
              if (seconds >= 10)
                display.text("0:"+ seconds);
              else
                display.text("0:0" + seconds);
              
          }, 1000);
      }
    
      $("#start-btn").on("click", function() {
        $("#start-btn").hide();
        $("#game").show();
        startTimer(10,$("#timer"));
      });
      
      var incrCount = function(display) {
        count = count+1;
        display.text(count);
      }
      
      $("#count-btn").on("click", function() {
        incrCount($("#counter"));
      })
    })