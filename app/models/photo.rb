class Photo < ApplicationRecord
  validates :user_id, :photo_type, presence: true

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

end
