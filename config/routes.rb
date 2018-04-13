Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, param: :username, only: [:show]
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :index, :show, :destroy]
    resources :photos, only: [:create, :destroy]
  end



end
