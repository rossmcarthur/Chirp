class ChangePhotoColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :photos, :author_id, :user_id
  end
end
