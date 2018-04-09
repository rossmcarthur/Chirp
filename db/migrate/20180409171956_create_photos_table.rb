class CreatePhotosTable < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :author_id, null: false
      t.string :photo_type, null: false

      t.timestamps
    end
  end
end
