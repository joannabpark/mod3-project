class MatchSerializer
  include FastJsonapi::ObjectSerializer
  attributes :created_at
  belongs_to :user
  belongs_to :other_user
end
