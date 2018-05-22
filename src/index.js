document.addEventListener('DOMContentLoaded', function() {
  const imageId = 10 //Enter your assigned imageId here
  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  $.get(imageURL).done(function(resp){
    $('#name')[0].innerHTML = resp.name
    $('#image')[0].src = resp.url
    $('#image')[0].data = resp.id
    $('#likes')[0].innerHTML = resp.like_count
    resp.comments.forEach(function(element){
      $('#comments').append('<li>' + element.content + '</li>')
    })
  })

  $('#like_button').on("click", function (){
    likes = $('#likes').innerHTML
    newLikes = parseInt(likes) + 1
    likes = newLikes
    console.log(likes)
  }

  $("#comment_form").on("submit", function(event){
    event.preventDefault();
    $.post(commentsURL, {content: $("#comment_input")[0].value, image_id: $('#image')[0].data}, function(data) {
      $('#comments').append('<li>' + data.content + '</li>')
    });
  });
})
