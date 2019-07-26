class Api::MessagesController < ApplicationController
 
  def index
   
    @group = Group.find(params[:group_id])
    @messages = @group.messages.includes(:user).where('id > ?', params[:last_id]) 
    respond_to do |format|
      format.html{ redirect_to "group_messages_path(params[:group_id])" }
      format.json

    end
  end
end