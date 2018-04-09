class User < ApplicationRecord
  validates :email, :session_token, :username, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :image, default_url: "default-user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  attr_reader :password

  has_many :posts,
    class_name: :Post,
    foreign_key: :author_id

  has_many :active_relationships,
    class_name: :Relationship,
    foreign_key: :follower_id,
    dependent: :destroy

  has_many :passive_relationships,
    class_name: :Relationship,
    foreign_key: :followed_id,
    dependent: :destroy

  has_many :following,
    through: :active_relationships,
    source: :followed

  has_many :followers,
    through: :passive_relationships,
    source: :follower

  has_many :photos,
    class_name: :Photo,
    foreign_key: :user_id,
    dependent: :destroy

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
