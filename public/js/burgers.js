// $(function() {
    $(".devour").on("click", function() {
        console.log("hello")

      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
      console.log(devoured);
  
      var newBurgerState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed sleep to", newBurgerState);
          // Reload the page to get the updated list
        //   location.reload();
        });
      
    });

    $("#addBurger").on("click", function() {
        console.log("hello wilson")
        let name = $("#ca").val();
        let burgerData = {name: name}
        $.ajax("/api/burgers", {
            type: "POST",
            data: burgerData
          }).then(
            function() {
                console.log("sent");
            //   Reload the page to get the updated list
            // //   location.reload();
            });
          
    });