Rails.application.routes.draw do
  resources :reviews, only: [:create]
  resources :restaurants, only: [:index]
  resources :users, only: [:create]
  post "/login", to: "users#login"
  get "/persist", to: "users#persist"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
