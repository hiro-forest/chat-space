$(function(){
  function buildHTML(message){
    let img = message.image ? `<img src = ${message.image} >` : " ";

    let html = 
      `<div class="message">
        <div class="upper-message">
         <div class="upper-message__user-name"> 
          ${message.user_name}
         </div>
          <div class="upper-message__date">
           ${message.date}
          </div>
        </div>
        <div class="lower-message">
        <p class="lower-message__content">
          ${message.content}
        </p>
            ${img} 
        </div>
        </div>`
      return html;
  };
  $("#new_message").on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast'); 
      $('form')[0].reset();

    })
    .fail(function(){
      alert('error');
    })
    return false;
  });
});



// `<div class="message">
//           <p class="lower-message__image">
//             ${message.image}
//         </div>`