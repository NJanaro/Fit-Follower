class UpdateWorkoutsTableAthleteId < ActiveRecord::Migration[5.2]
  def change
    change_table :workouts do |t|
      t.rename :user_id, :athlete_id
    end 
  end
end
