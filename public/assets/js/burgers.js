$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      //create object with devored set to true to send in put request
      var newDevouredState = {
        devoured: true
      };

      //send ajax request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("burger #" + id + " devoured");

          //reload the page to update list
          location.reload();
        }
      );
    });
  
    $("#add-burger").on("submit", function(event) {
      event.preventDefault();
  
      //create newBurger object with burger name to create in post request
      var newBurger = {
        burger_name: $("#burger_name").val().trim()
      };
  
      $("#burger_name").val("");

      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");

          //reload page to get updated list
          location.reload();
        }
      );
    });
  });
  