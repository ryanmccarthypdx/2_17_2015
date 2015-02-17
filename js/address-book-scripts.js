var capitalize = function(inputWord) {
  var letters = inputWord.split("");
  var firstLetter = letters.shift();
  var cappedLetter = firstLetter.toUpperCase();
  letters.unshift(cappedLetter);
  var outputWord = letters.join("");
  return outputWord;
};

$(document).ready(function() {
  var allContacts = [];

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = capitalize($("input#new-first-name").val());
    var inputtedLastName = capitalize($("input#new-last-name").val());
    var inputtedAddress = $("input#new-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: inputtedAddress };
    allContacts.push(newContact);

    $("ul#contacts").empty();

    allContacts.sort(function(a, b) {
      if (a.lastName > b.lastName) {
        return 1;
      } else if (a.lastName < b.lastName) {
        return -1;
      } else if (a.firstName > b.firstName) {
        return 1;
      } else {
        return 0;
      }
    });

    allContacts.forEach(function(contact) {
      $("ul#contacts").append("<li><span class='contact'>" + contact.firstName + " " + contact.lastName + "</span></li>");
      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(contact.firstName + " " + contact.lastName);
        $(".first-name").text(contact.firstName);
        $(".last-name").text(contact.lastName);
        $(".address").text(contact.address);
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-address").val("");

  });
});
