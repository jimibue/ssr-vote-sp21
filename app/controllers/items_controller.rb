class ItemsController < ApplicationController

    # get started sssrr
    def app
     render component: "App"
    end


    ### API CALLS

    # GET localhost:3000/items => render items json
    #[{"id":1,"category":"misc","name":"XML","description":"The GB panel is down, hack the primary panel so we can transmit the EXE array!","likes":0,"created_at":"2021-03-03T16:48:47.564Z","updated_at":"2021-03-03T16:48:47.564Z"}]
    def index
      @items = Item.order(likes: :desc)
    #   render component: "Items", props: {items:@items}
      render json: @items
    end
     
    # Post /items
    # send data/params {item:{name:required,description}}
    def create
     @item = Item.new(items_params)
     if @item.save
        render json: @item
     else
        render json: {error: 422, message: @item.errors.full_messages}
     end
    end

    def destroy
      @item = Item.find(params[:id]).destroy

      render json: @item
    end

    private

    def items_params
      params.require(:item).permit(:name, :description, :category, :likes)
    end


end


