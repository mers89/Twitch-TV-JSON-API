//Run our JQUERY
$(document).ready(function(){
 var following=[];
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

 var followerURL= "https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/follows";  
 $.getJSON(followerURL, function(data2){
for (var i=0;i<data2._links.follows.length;i++){
var displayName= data2.follows[i].channel.display_name;
 
 following.push(displayName);
 
}
console.log(following);
});
});
