$(document).on('turbolinks:load', function(){

  function buildHTML(message) {
 
    var img = (message.image)? `<img class="lower-message__image" src= ${message.image}>`:"";
     var html = `<div class="message" data-id=${message.id}>
                  <div class="message__upper-message">
                   <div class="message__upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="message__upper-message__date">
                    ${message.date}
                  </div>
                </div>
                <div class="message__lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    </div>
                    ${img}
                </div>`;
  return html;
  }
  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var message = new FormData(this);
    var url = (window.location.href);

    $.ajax({
      url: url,
      type: 'POST',
      data: message,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
     
      $(".messages").append(html);
      $(".form").val(''); //input内のメッセージを消しています。
      $('#new_message')[0].reset();
      $(".form__submit").prop('disabled', false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })

    .fail(function(){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    
    })
  })
});
