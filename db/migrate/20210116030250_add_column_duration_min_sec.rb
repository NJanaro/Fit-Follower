class AddColumnDurationMinSec < ActiveRecord::Migration[5.2]
  def change
    add_column :workouts, :duration_min, :integer
    add_column :workouts, :duration_sec, :integer
  end
end
