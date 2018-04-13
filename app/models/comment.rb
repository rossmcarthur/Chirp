class Comment < ApplicationRecord
  validates :body, presence: true
  validates :post_id, presence: true, unless: :comment_exists?
  validates :comment_id, presence: true, if: :comment_exists?
  
  belongs_to :post,
    class_name: :Post,
    foreign_key: :post_id

  belongs_to :comment,
    class_name: :Comment,
    foreign_key: :comment_id

  def comment_exists?
    self.comment_id
  end

end
