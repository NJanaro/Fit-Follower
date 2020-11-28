class UpdateRoutesTable2 < ActiveRecord::Migration[5.2]
  change_table :routes do |t|
    t.remove :start_lat, :start_lng, :end_lat, :end_lng
    t.string :route_info
  end
end
