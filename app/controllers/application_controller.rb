require "application_responder"

class ApplicationController < ActionController::Base
  self.responder = ApplicationResponder
  respond_to :html

  protect_from_forgery with: :exception
  self.responder = ApplicationResponder
  respond_to :json
  def angular
    render 'layouts/application'
  end
end
