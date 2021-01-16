class ChangeTableNameWorkouts < ActiveRecord::Migration[5.2]
  def change
    rename_table :workouts_tables, :workouts
  end
end
