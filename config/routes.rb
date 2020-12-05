Rails.application.routes.draw do
  
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only:[:create, :destroy]
    resources :users, only:[:create, :show]
    resources :users do
      resources :routes, only: [:index, :create, :destroy, :show, :update]
    end
    
    
  end
end
