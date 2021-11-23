$(document).ready(function() {
    $("form#date").submit(function(event) {
      const age = parseInt($("input#age").val());
      const gender = $("select#gender").val();
     
      if (gender === 'female' && age > 18) {
        $("#male").show()
      } else if (gender === 'male' && age > 18) {
        $("#female").show()
      }
      
      else {
        $("#underage").text('you are not eligible to view this site.')
      }
      event.preventDefault();
    });

    // add and remove class

    $("button#green").click(function() {
      $("body").removeClass();
      $("body").addClass("green-background");
      $("h1").addClass("yellow-background");
    });
  
    $("button#yellow").click(function() {
      $("body").removeClass();
      $("body").addClass("yellow-background");
    });
  
    $("button#red").click(function() {
      $("body").removeClass();
      $("body").addClass("red-background");
    });

    $("button#blue").click(function() {
        $("body").removeClass();
        $("body").addClass("blue-background");
      });

      $("button#black").click(function() {
        $("body").removeClass();
        $("body ").addClass("black-background");
      });
      $(".icon").click(function() {
       // $(".container").toggle();
        //$(".container").slideToggle("slow");
      $(".contain").toggle("slide");
      
     
      });
  });
  

  