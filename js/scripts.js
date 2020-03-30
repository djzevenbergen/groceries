$(document).ready(function () {

  var items = ["one", "two", "three", "four", "five", "six"];
  var lists = [];

  $("#formOne").submit(function (event) {
    $("#formOne").hide();
    event.preventDefault();
    items.forEach(function (item) {
      lists.push(($("input#" + item).val()));
    });

    lists.sort();

    var newLists = lists.map(function (list) {
      return list.toUpperCase();

    });

    newLists.forEach(function (newList) {
      $("#elFinal").append("<li>" + newList + "</li>");

    });

  });
});