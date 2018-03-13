Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :destroy]
  end
  resource :session, only: [:create, :destroy, :show]

end
