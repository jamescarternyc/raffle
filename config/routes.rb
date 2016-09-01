Rails.application.routes.draw do
  resources :payments
  resources :winners
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
