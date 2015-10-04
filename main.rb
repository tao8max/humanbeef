require 'sinatra'
require 'mandrill' 

get '/' do     
	erb :index   
end
get '/about' do 
	erb :about
end
get '/products' do
	erb :products
end

get '/faq' do
	erb :faq
end
get '/recipes' do
	erb :recipes
end
get '/contact' do
	erb :contact
end