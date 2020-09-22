class User < ApplicationRecord

  attr_reader :password

  validates :username, presence:true, uniqueness:true
  validates :password_digest, presence:true
  validates :password, length:{minimum: 6, allow_nil:true}
  before_validation :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username:username)
    return @user if @user && @user.is_password?(password)
  end
  
  def is_password?(password)
    bcrypt_inst = BCrypt::Password.new(self.password_digest)
    bcrypt_inst.is_password?(password)
  end

  def ensure_session_token  
    self.session_token ||= User.generate_session_token
  end
  
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

end