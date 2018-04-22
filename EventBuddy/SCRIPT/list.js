// function filter() {
//   var input, key, a, ul, li, i;
//   input = document.getElementById("input");
//   key = input.value.toLowerCase();
//   ul = document.getElementById("eventContainer");
//   li = ul.getElementsByTagName("li");
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     if(a.innerHTML.toLowerCase().indexOf(key) > -1 ) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

function filter() {
  var inpput, key, list, i;
  input = document.getElementById("input");
  key = input.value.toLowerCase();
  list = document.getElementsByTagName("h4");
  for (i = 0; i < list.length; i++) {
    // a = list[i].className.indexOf(key) > -1);
    if(list[i].className.indexOf(key) > -1) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}
