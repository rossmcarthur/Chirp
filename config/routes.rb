Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:create, :index, :show, :destroy]
  end



end
