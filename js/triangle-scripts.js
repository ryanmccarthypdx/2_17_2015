var triangle = function(input) {
  input.sort(function(a, b) {
    return a - b;
  });
  var side1 = input.shift();
  var side2 = input.shift();
  var side3 = input.shift();
  if (side3 < (side2 + side1)) {
    if ((side2 === side3) || (side2 === side1)) {
      if (side3 === side1) {
        return "an equilateral";
      } else {
        return "an isosceles";
      }
    } else {
      return "a scalene";
    }
  } else {
    return "an impossible";
  }
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    var sideA = parseInt($("input#side-a").val());
    var sideB = parseInt($("input#side-b").val());
    var sideC = parseInt($("input#side-c").val());
    var inputCombo = [sideA, sideB, sideC]
    var output = triangle(inputCombo);
    $("#output").text(output);
    $(".result").show();
    event.preventDefault();
  });

})
