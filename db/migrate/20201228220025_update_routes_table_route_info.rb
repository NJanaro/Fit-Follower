class UpdateRoutesTableRouteInfo < ActiveRecord::Migration[5.2]
  def change
    remove_column :routes, :route_info 
    add_column :routes, :route_info, :text
  end
end
