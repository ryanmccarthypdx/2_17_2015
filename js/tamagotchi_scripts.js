$(function() {
  $("form#input").submit(function(event) {
    var name = $("input#name").val();
    var tamagotchi = {
      moniker: name,
      food: 10,
      sleep: 10,
      play: 10,
      isDead: function() {
        if (this.food < 1 || this.sleep < 1 || this.play < 1) {
          return true
        } else {
          return false
        }
      },
      isHungry: function() {
        if (this.food <= 3) {
          return true
        } else {
          return false
        }
      },
      isSleepy: function() {
        if (this.sleep <= 3) {
          return true
        } else {
          return false
        }
      },
      isBored: function() {
        if (this.play <= 3) {
          return true
        } else {
          return false
        }
      }
    };

    $(".inputted-name").text(tamagotchi.moniker);

    $("#food-level").text(tamagotchi.food);
    $("#sleep-level").text(tamagotchi.sleep);
    $("#play-level").text(tamagotchi.play);
    $("#picture").html('<img src="css/img/happy.png">')

    $(".alive").show();
    $(".name-pic").show();
    $("#input").hide();
    event.preventDefault();

    setInterval(function () {

      $("form#feed").submit(function(event) {
        event.preventDefault();
        tamagotchi.food = 10;
      });

      $("form#sleep").submit(function(event) {
        event.preventDefault();
        tamagotchi.sleep = 10;
      });

      $("form#play").submit(function(event) {
        event.preventDefault();
        tamagotchi.play = 10;
      });

      tamagotchi.food = (tamagotchi.food - 1)
      tamagotchi.sleep = (tamagotchi.sleep - 1)
      tamagotchi.play = (tamagotchi.play - 1)

      $("#food-level").text(tamagotchi.food);
      $("#sleep-level").text(tamagotchi.sleep);
      $("#play-level").text(tamagotchi.play);

      if (tamagotchi.isDead() === true) {
        $("#picture").html("<img class='picture' src='css/img/dead.jpg'>")
        $(".alive").hide();
        $("#input").show();
        $(".dead").show();
      } else if (tamagotchi.isHungry() === true) {
        $("#picture").html("<img class='picture' src='css/img/hungry.png'>")
      } else if (tamagotchi.isSleepy() === true) {
        $("#picture").html("<img class='picture' src='css/img/tired.png'>")
      } else if (tamagotchi.isBored() === true) {
        $("#picture").html("<img class='picture' src='css/img/bored.jpg'>")
      } else {
        $("#picture").html('<img class="picture" src="css/img/happy.png">')
      }
    }, 2000);





  });
});
