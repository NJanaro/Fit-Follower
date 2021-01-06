@workouts.each do |workout|
    json.set! workout.id do
        json.extract! workout, :id, :user_id, :workout_name, :workout_description, :distance, :date_complete, :average_pace :user_id
    end
end