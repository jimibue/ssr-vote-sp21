class ItemsController < ApplicationController

    def app
     render component: "App"
    end

    # GET /items => render items json
    def index
      @items = Item.order(likes: :desc)
      render json: @items
    end
end
