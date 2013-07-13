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
  $('#h-name').click(function(){
    $(".slide").slideUp();
    if($('#name-info').is(":visible"))
    {
      $('#name-info').slideUp('slow');
    } else {
      $('#name-info').slideDown('slow');
    }
  });
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
    $(".slide").slideUp();
    if($('#work-info').is(":visible"))
    {
      $('#work-info').slideUp('slow');
    } else {
      $('#work-info').slideDown('slow');
    }
  });
  $('#h-play').click(function(){
  $(".slide").slideUp();
    if($('#play-info').is(":visible"))
    {
      $('#play-info').slideUp('slow');
    } else {
      $('#play-info').slideDown('slow');
    }
  });
});
