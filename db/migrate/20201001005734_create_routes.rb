class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string "route_name", null: false
      t.text "description"
      t.integer "user_id", null: false, foreign_key:true
      t.integer "distance"
      t.timestamps
    end
  end
end
