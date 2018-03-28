class AddNullChirps < ActiveRecord::Migration[5.1]
  def change
    change_column_null :chirps, :author_id, false
    change_column_null :chirps, :body, false
  end
end
