class AddLocationToRoutes < ActiveRecord::Migration[5.2]
  def change
    add_column :routes, :start_lat, :float, null:false
    add_column :routes, :start_lng, :float, null:false
    add_column :routes, :end_lat, :float, null:false
    add_column :routes, :end_lng, :float, null:false
  end
end
