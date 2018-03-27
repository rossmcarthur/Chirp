class CreateChirp < ActiveRecord::Migration[5.1]
  def change
    create_table :chirps do |t|
      t.integer :author_id
      t.string :body

      t.timestamps
    end
  end
end
