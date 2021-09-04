class RemoveColumn < ActiveRecord::Migration[6.0]
  def change
     remove_column :robots, :string
  end
end
