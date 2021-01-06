class CreateWorkoutsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts_tables do |t|
      t.string :workout_name, null:false
      t.string :distance, null:false
      t.string :duration, null:false
      t.string :average_pace, null:false
      t.text :route_description
      t.timestamps
    end
  end
end
