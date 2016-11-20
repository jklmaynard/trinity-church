Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#angular'
  resources :posts, defaults: {format: 'json'}, only: [:create, :index, :show] do
    member do

    end
  end

end
