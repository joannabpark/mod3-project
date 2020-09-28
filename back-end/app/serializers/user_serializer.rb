class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :image_url, :attracted_to, :occupation, :interests, :location, :phone_nunber, :email_address, :veggie_type
end
