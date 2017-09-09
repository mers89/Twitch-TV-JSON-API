$(document).ready(function(){
  var following = [];
  var url = "https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";

  $.getJSON(url,function(data1){
    if(data1.stream == null){
        $("#fccStatus").html("Free Code Camp is currently OFFLINE!");
      } else {   
        $("#fccStatus").html("Free Code Camp is currently ONLINE!");
      }});   
 
  var followerURL= "https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/";

  $.getJSON(followerURL, function(data2) {
    for (var i=0; i < data2.follows.length; i++) {
      var displayName = data2.follows[i].channel.display_name;
      following.push(displayName);
    }

    following.push("comster404");
    following.push("brunofin");
    following.push("ESL_SC2");

    for(var i=0; i<following.length; i++) {
        var url2 = 'https://wind-bow.glitch.me/twitch-api/channels/'+following[i]+'?callback=?';  
     
     console.log(url2)
  
  

 
  var parsedata = function(data3) {
   console.log(data3)
     $("#logo")
      .append("<img src='" + data3.logo + "'>");
    // var logoHeight = 200
     $("#displayname")
      .append('<div style="margin-top: 10em;">' + data3.display_name + "</div>");

     $("#status")
      .append("<div>" + data3.status + "</div>");
   }
   $.getJSON(url2, parsedata);
  }
 
});
 });
