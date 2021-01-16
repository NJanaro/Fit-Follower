class ChangeWorkoutsDate < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :date_complete, :string
  end
end
