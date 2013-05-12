Books::Application.routes.draw do

  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  root :to => 'ember#index'
  resources :books #, :except => :edit, :constraints => Fx
  resources :tags #, :except => :edit, :constraints => FormatTest.new(:json)
  resources :reviews #, :except => :edit, :constraints => FormatTest.new(:json)

  #TODO
  #get '*foo', :to => 'ember#index', :constraints => FormatTest.new(:html)

end
