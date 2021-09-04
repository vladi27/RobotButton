class CreateRobots < ActiveRecord::Migration[6.0]
  def change
    create_table :robots do |t|
      t.string :status
      t.string :string

      t.timestamps
    end
  end
end
