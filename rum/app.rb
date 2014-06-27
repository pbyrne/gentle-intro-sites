require "rubygems"
require "sinatra"

class App < Sinatra::Base

  get "/" do
    "Hello, Unicorn!"
  end

end


