

        .form 
        .form__message
          %input.form__message__input-box{placeholder: "type a message", type: "text"}
           
          %label.form__message__label 
            =fa_icon 'image', class: 'icon fa',style: "color:gray;"
            %input{class:"form__message__file",type:"file",id:"upload-icon"}
        %input{class:"form__submit-btn", method: "Send", name: "commit", type:"submit", value:"Send"}
           
    .messages__message
       .messages__message__name
         = @message.user.name
     .messages__message__name-data
         = message.created_at.strftime("%Y/%m/%d %H:%M")
     .messages__text
       - if message.content.present?
         %p.messages__message__content
          = message.content
      = image_tag message.image.url, class: 'lower-message__image' if message.image.present?



      .chat-side__groups__group
        - current_user.groups.each do |group|
          = link_to group_messages_path(group) do
            .chat-side__groups__group__name
              = group.name
            .chat-side__groups__group__name__latest-message
              メッセージはまだありません。