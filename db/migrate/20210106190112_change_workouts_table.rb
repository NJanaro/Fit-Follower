class ChangeWorkoutsTable < ActiveRecord::Migration[5.2]
  def change
    change_table :workouts do |t|
      t.remove :route_description
      t.text :workout_description
    end
  end
end
