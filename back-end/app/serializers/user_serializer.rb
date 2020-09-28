class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :image_url, :attracted_to, :occupation, :interests, :location, :phone_number, :email_address, :veggie_type
  has_many :initiated_matches
  has_many :accept_matches

end
