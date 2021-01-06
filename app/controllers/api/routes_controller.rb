class Api::RoutesController < ApplicationController
    def index
        @routes = current_user.routes
    end

    def create
        @routes = current_user.routes
        @route = Route.new(route_params)
        if @route.save
            render :index
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    def update
        @routes = current_user.routes
        @route = Route.find(params[:id])
        if @route.update(route_params)
            render :index
        else
            render json: @route.errors.full_messages, status: 401
        end
    end

    def show
        @route = Route.find(params[:id])
        render :show
    end

    def destroy 
        @route = Route.find(params[:id])
        if @route
            @route.destroy
            @routes = current_user.routes
            render :index
        else
            render json: ["Route doesn't exist"], status: 400
        end
    end
    
        private

    def route_params
        params.require(:route).permit(:user_id, :route_name, :description, :distance, :route_info)
    end

end