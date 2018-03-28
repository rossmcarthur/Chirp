class RenameChirpTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :chirps, :comments
  end
end
