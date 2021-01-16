class ChangeDuractionToString < ActiveRecord::Migration[5.2]
  def change
    change_table :workouts do |t|
      t.remove :duration_min
      t.remove :duration_sec
      t.string :duration_min
      t.string :duration_sec
    end
  end
end
