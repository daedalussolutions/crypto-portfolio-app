Rails.application.routes.draw do
  root "currencies#index"
  get "about", to: "about#index"
  get "login", to: "registrations#existing"
  get "register", to: "registrations#new"

  post "search", to: "currencies#search"
  post "calculate", to: "currencies#calculate"
  delete "delete", to: "currencies#delete"

  # resource :registration
  # resource :session
  # resource :password_reset
  # resource :password
end
