//Run our JQUERY
$(document).ready(function(){
 var following = [];
 //Freecodecamp Stream info status API call
 var url= "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
 $.getJSON(url,function(data1){
  if(data1.stream===null){
   $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
   }
   else{   
    $("#fccStatus").html("Free Code Camp is currently ONLINE!");
   
  }
     
 });
 
var followerURL= "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/";
$.getJSON(followerURL, function(data2){
 for (var i=0;i<data2.follows.length;i++){
 var displayName= data2.follows[i].channel.display_name;
following.push(displayName);
 } 
following.push("counter404");
following.push("counter404");
following.push("ESL_SC2");
console.log(following);
 });
 });
