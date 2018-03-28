class RenameCommentTable < ActiveRecord::Migration[5.1]
  def change
    rename_table :comments, :posts
  end
end
