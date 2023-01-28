
//arrays for latitude and longitude
const Athlone = [53.4239, 7.9407];
const Belfast = [54.5973, 5.9301];
const Cork = [51.8985, 8.4756];
const Derry = [54.9966, 7.3086];
const Dublin = [53.3498, 6.2603]
const Galway = [53.2707, 9.0568];
const Limerick = [52.6638, 8.6267];
const Sligo = [54.2766, 8.4761];
const Waterford = [52.2593, 7.1101];
const default1 = [0, 0];

//Known as the Haversine function
function distance(lat1, lon1, lat2, lon2,) {
  var radlat1 = Math.PI * lat1 / 180;
  var radlat2 = Math.PI * lat2 / 180;
  var radlon1 = Math.PI * lon1 / 180;
  var radlon2 = Math.PI * lon2 / 180;
  var theta = lon1 - lon2;
  var radtheta = Math.PI * theta / 180;
  var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180 / Math.PI;
  dist = dist * 60 * 1.1515;
  dist = dist * 1.609344;
  // if (unit == "K") { dist = dist * 1.609344 }
  // if (unit == "N") { dist = dist * 0.8684 }
  return dist
}

// var distance = distance(53.2707, 9.0568, 53.4239, 7.9407, 'K');
// var distance = distance(Galway[0], Galway[1], Dublin[0], Dublin[1], 'K');

//round to 3 decimal places
// console.log(Math.round(distance * 100) / 100);



$ = function (id) {
  return document.getElementById(id);
};

// Dropdown1
function dropFunction() {
  var x = document.getElementById("myDIV");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Filter
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("location1");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDIV");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// Dropdown2
function dropFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Filter
function filterFunction2() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("location2");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDIV2");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
//Setting Second distance to...
function setAthlone2() {
  console.log("Athlone");

  c = Athlone[0];
  b = Athlone[1];
  console.log(Athlone[0]);
  console.log(Athlone[1]);
  $("Location2text").innerHTML = "<h1>Athlone</h1>";
  // $("distanceShow").innerHTML = "<b>Distance =</b>" + Math.round(distance * 100) / 100 + " Km";

}

function generalSet(parm1, parm2) {
  console.log(`${parm1} and ${parm2}`);
  a = parm1[0];
  b = parm1[1];

  c = parm2[0];
  d = parm2[1];

  $("distanceShow").innerHTML = "<b>Distance =</b>" + Math.round(distance(a, b, c, d) * 100) / 100 + " Km";
  console.log("Distance = " + Math.round(distance(a, b, c, d) * 100) / 100 + " Km");
}

function getTheText (){
  document.getElementById('location1').addEventListener('click', function () {
  var elem = document.getElementById('resetBtn');
  var txt = elem.textContent || elem.innerText;
  console.log(txt);
  });
}


function refreshPage(){
  window.location.reload();
} 

function changeLocationOne(str){
  $("Location1text").innerHTML = `<h1>${str}</h1>`;
}

function changeLocationTwo(str){
  $("Location2text").innerHTML = `<h1>${str}</h1>`;
}

//////////////////////////////////////
window.onload = function () {
  $("distBtn").onclick = function () {
     var Loc1 =  $("Location1text").innerText;
     var Loc2 =  $("Location2text").innerText;

     if( Loc1 != undefined && Loc2 != undefined){
      generalSet(eval(Loc1),eval(Loc2));
      console.log(Loc1);
      console.log(Loc2);
     }
      
    };
  
  $("#Athlone1").onclick = function () { changeLocationOne($("#Athlone1").innerText) }
  $("#Belfast1").onclick = function () { changeLocationOne($("#Belfast1").innerText) }
  $("#Cork1").onclick = function () { changeLocationOne($("#Cork1").innerText) }
  $("#Derry1").onclick = function () { changeLocationOne($("#Derry1").innerText) }
  $("#Dublin1").onclick = function () { changeLocationOne($("#Dublin1").innerText) }
  $("#Galway1").onclick = function () { changeLocationOne($("#Galway1").innerText) }
  $("#Limerick1").onclick = function () { changeLocationOne($("#Limerick1").innerText) }
  $("#Sligo1").onclick = function () { changeLocationOne($("#Sligo1").innerText) }
  $("#Waterford1").onclick = function () { changeLocationOne($("#Waterford1").innerText) }
  $("resetBtn").onclick = function () { refreshPage(); }

  var select = document.getElementById("location1");
  

  //second
  $("#Athlone2").onclick = function () {  changeLocationTwo($("#Athlone2").innerText) }
  $("#Belfast2").onclick = function () { changeLocationTwo($("#Belfast2").innerText) }
  $("#Cork2").onclick = function () { changeLocationTwo($("#Cork2").innerText) }
  $("#Derry2").onclick = function () { changeLocationTwo($("#Derry2").innerText); }
  $("#Dublin2").onclick = function () { changeLocationTwo($("#Dublin2").innerText) }
  $("#Galway2").onclick = function () { changeLocationTwo($("#Galway2").innerText) }
  $("#Limerick2").onclick = function () { changeLocationTwo($("#Limerick2").innerText) }
  $("#Sligo2").onclick = function () { changeLocationTwo($("#Sligo2").innerText) }
  $("#Waterford2").onclick = function () {changeLocationTwo($("#Waterford2").innerText )}

}
