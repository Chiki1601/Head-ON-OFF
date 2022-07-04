ch = document.querySelector("#check");
chB = document.querySelector("#checkbig");

(function () {
  ch.addEventListener("change", function (e) {
    if (this.checked) {
      chB.checked = true;
    } else {
      chB.checked = false;
    }
  });
})();