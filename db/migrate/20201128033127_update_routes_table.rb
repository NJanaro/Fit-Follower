class UpdateRoutesTable < ActiveRecord::Migration[5.2]
  def change
    change_column :routes, :distance, :string
  end
end
