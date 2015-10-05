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

def send_email(message_body)
  
  mandrill = Mandrill::API.new

  message = {
   :subject => "Hello from the Mandrill API",
   :from_name => name,
   :text => message_body,
   :to => [{:email=> "taomax8@gmail.com", :name=> "Max"}],
   :html => "<html><h1>#{message_body}</h1></html>",
   :from_email => email
  }

  sending = mandrill.messages.send message
  puts sending
end

post "/contact_us_post" do 
	puts "Sending email now"
	send_email params[:message_body]
end
