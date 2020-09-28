class Match < ApplicationRecord
  belongs_to :user_id
  belongs_to :other_user_id
end
