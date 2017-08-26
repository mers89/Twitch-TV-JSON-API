//Run jquery
$(document).ready(function(){
 
 var url= "https://api.twitch.tv/kraken/stream/freecodecamp";

 $.getJSON(url,function(data1){
 if (data1.stream===null){
  $("#fccStatus").html("Free Code Camp is currently offline")
 }
  else(
  $("#fccStatus").html("Free Code Camp is currently online")
   )
 }
          
});
});


$(document).ready(function(){
 //free code camp streaam info and status API call
 var url= "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
 //free code camp stream info and status API call

 $.getJSON(url,function(data1){
 if (data1.stream===null){
  $("#fccStatus").html("Free Code Camp is currently offline");
 }
  else{
  $("#fccStatus").html("Free Code Camp is currently online");
  }
 });
 var followerURL= "https://api.twitch.tv/kraken/users/freecodecamp/followers/channels/";
 $.getJSON(followerURL, function(data2){
  console.log(data2);


   });
 });
