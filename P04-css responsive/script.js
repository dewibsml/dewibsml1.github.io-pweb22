$(document).ready(() => {
    $("td").click(function (event) {
      alert("Kamu Memilih " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("Kamu Memilih " + $(this).html() + "!");
    });
  });
