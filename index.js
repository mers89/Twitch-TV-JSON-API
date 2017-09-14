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
  
      
     $.getJSON(url2).done(function(data3) {
      
      console.log("the returned data3 is ", data3);
      var errorLogo= "http://res.cloudinary.com/mers/image/upload/c_scale,w_175/v1504573315/ui-day033-404error_u37kee.png";
      
    if (data3.error == undefined) {
    var picUrl = data3.logo != null ? data3.logo : errorLogo;
    $("#logo")
      .append("<img class='logo_row' src='" + picUrl  + "'>");
    var logoHeight = 200
    
 
     $("#displayname")
      .append('<div class="status_row">' + data3.display_name + "</div>");

     $("#status")
      .append('<div class="status_row">'  + data3.status + "</div>");
      } 
      
     
      else {
        var logo= "http://res.cloudinary.com/mers/image/upload/c_scale,w_175/v1504573315/ui-day033-404error_u37kee.png";
         $("#logo")
          .append("<img class='logo_row' src='"+ logo + "'>") ;
     }});
     

 
  //var parsedata = function(data3) {
  // console.log(data3)
   //  $("#logo")
     // .append("<img class='logo_row' src='" + data3.logo + "'>");
    // var logoHeight = 200
    // $("#displayname")
     // .append('<div class="status_row">' + data3.display_name + "</div>");

     //$("#status")
   //   .append('<div class="status_row">'  + data3.status + "</div>");
  // }
  // $.getJSON(url2, parsedata);
  }
 
});
 });
