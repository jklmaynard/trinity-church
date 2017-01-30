Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#angular'
  resources :posts, defaults: {format: 'json'}, only: [:create, :index, :show, :destroy, :edit] do
    member do

    end
  end

end
