

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());
event.preventDefault();
    var triangle = {
      sideA: sideA,
      sideB: sideB,
      sideC: sideC,
      type: function() {
        var input = [this.sideA, this.sideB, this.sideC]
        input.sort(function(a, b) {
          return a - b;
        });
        var side1 = input.shift();
        var side2 = input.shift();
        var side3 = input.shift();
        if (side3 > (side2 + side1)) {
          alert("You fool, that is no triangle!!!");
        } else if (side3 === side1) {
          return "equilateral";
        } else if ((side2 === side3) || (side2 === side1)) {
          return "isosceles";
        } else {
          return "scalene";
        }
      }
    };
    if (triangle.type() === "scalene") {
      $("ul#scalenes").append("<li>" + triangle.combo().join(", ") + "</li>")
    } else if (triangle.type() === "isosceles") {
      $("ul#isosceles").append("<li>" + triangle.combo().join(", ") + "</li>")
    } else if (triangle.type() === "equilateral") {
      $("ul#equilaterals").append("<li>" + triangle.combo().join(", ") + "</li>")
    }


  });

})
