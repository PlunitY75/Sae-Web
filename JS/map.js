var map = document.getElementById("map");
var paths = map.querySelectorAll(".map-image a");
var links = map.querySelectorAll(".map-list a");

// if (NodeList.prototype.forEach === undefined) {
//   NodeList.prototype.forEach = function (callback) {
//     [].forEach.call(this, callback);
//   };
// }

var activeArea = function (id) {
  map.querySelectorAll(".is-active").forEach(function (item) {
    item.classList.remove("is-active");
  });

  var listElements = document.querySelectorAll("#list-" + id);
  var mapElements = document.querySelectorAll("#Communes-" + id);

  if (id !== undefined && listElements.length > 0 && mapElements.length > 0) {
    listElements[0].classList.add("is-active");
    mapElements[0].classList.add("is-active");
  }
};

paths.forEach(function (path) {
  path.addEventListener("mouseenter", function (e) {
    var id = this.id.replace("Communes-", "");
    activeArea(id);
  });
});

links.forEach(function (link) {
  link.addEventListener("mouseenter", function () {
    var id = this.id.replace("list-", "");
    activeArea(id);
  });
});

map.addEventListener("mouseover", function () {
  activeArea();
});
