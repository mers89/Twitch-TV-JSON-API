$(document).ready(function(){
 //free code camp streaam info and status API call
 var url= "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";

 $.getJSON(url,function(data1){
 if (data1.stream===null){
  $("#fccStatus").html("Free Code Camp is currently offline");
 }
  else{
  $("#fccStatus").html("Free Code Camp is currently online");
  }
 });


   });
