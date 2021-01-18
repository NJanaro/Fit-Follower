class Api::WorkoutsController < ApplicationController

    def index
        # debugger
        @workouts = current_user.workouts
        render :index
    end

    def show
        @workout = Workout.find(params[:id])
        render :show
    end

    def create
        @workouts = current_user.workouts
        @workout = Workout.new(workout_params)
        if @workout.save
            render :index
        else
            render json: @workout.errors.full_messages, status:401
        end
    end

    def update
        @workout = Workout.find(params[:id])
        @workouts = Workout.all
        if @workout.update(workout_params)
            render :index
        else
            render json: @workout.errors.full_messages, status:401
        end

    end

    def destroy
        @workout = Workout.find(params[:id])
        if @workout
            @workout.destroy
            @workouts = current_user.workouts
            render :index
        else
            render json: ["Workout doesn't exist"], status: 400
        end
    end


    def workout_params 
        params.require(:workout).permit(:duration_min, :duration_sec, :athlete_id, :workout_name, :workout_description, :distance, :duration, :average_pace, :date_complete, :sport)
    end



end