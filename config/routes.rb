Rails.application.routes.draw do
  root to: 'reviews#index' 
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :reviews, only: [:show, :new, :create]
end
