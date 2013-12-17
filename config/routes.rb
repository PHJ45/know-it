Knowitowl::Application.routes.draw do

  root 'prospects#new'

  resources :prospects

end
