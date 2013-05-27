// $(document).ready(function(){
//   $("h2").click(function(){
//     //slide up all the link lists
//     $(".slide").slideUp();
//     //slide down the link list below the h3 clicked - only if its closed
//     if(!$(this).next().is(":visible"))
//     {
//       $(this).next().slideDown();
//     }
//   });
// });

$(document).ready(function(){
  $('#h-bio').click(function(){
    $(".slide").slideUp();
    if($('#bio-info').is(":visible"))
    {
      $('#bio-info').slideUp('slow');
    } else {
      $('#bio-info').slideDown('slow');
    }
  });
  $('#h-work').click(function(){
      if($('#work-info').is(":visible"))
      {
        $('#work-info').slideUp('slow');
      } else {
        $('#work-info').slideDown('slow');
      }
    });
});
