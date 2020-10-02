class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :image_url, :attracted_to, :occupation, :interests, :location, :phone_number, :email_address, :veggie_type, :bio, :password 
  # attribute :matches do |user|
  #   Match.where(matcher_id: user.id).or(Match.where(matchee_id: user.id))
  # end
end
