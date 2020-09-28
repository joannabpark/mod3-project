class OtherUserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :age, :image_url, :attracted_to, :occupation, :interests, :location, :phone_number, :email_address, :veggie_type 
end
