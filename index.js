//Run our JQUERY
$(document).ready(function(){
 var following = [];
 //Freecodecamp Stream info status API call
 var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
 $.getJSON(url,function(data1){
  if(data1.stream===null){
   $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
   }else{   
    $("#fccStatus").html("Free Code Camp is currently ONLINE!");
    }   
 });
 
var followerURL= "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/";
$.getJSON(followerURL, function(data2){
 for (var i=0; i < data2.follows.length; i++)
 {
 var displayName= 
     data2.follows[i].channel.display_name;
following.push(displayName);
 } 
  //Array created to pull data from get JSON
following.push("comster404");
following.push("brunofin");
following.push("ESL_SC2");
 
 //for loop iterate through array

    for(var j=0; j <following.length; j++){
    var url2 = "https://wind-bow.glitch.me/twitch-api/channels/" + following[j];
 }

 });

$.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;

console.log(following);

 });


 
 });
