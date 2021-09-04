Rails.application.routes.draw do
  get 'robots/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "robots#index"
  resources :robots, only: [:create, :show, :update]
end
