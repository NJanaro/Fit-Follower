@workouts.each do |workout|
    json.set! workout.id do
        json.extract! workout, :duration, :duration_min, :duration_sec, :id, :athlete_id, :workout_name, :workout_description, :distance, :date_complete, :average_pace, :sport
    end
end