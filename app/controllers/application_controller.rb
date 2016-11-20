class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  repond_to :json
  def angular
    render 'layouts/application'
  end
end
