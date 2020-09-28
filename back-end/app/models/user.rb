class User < ApplicationRecord
    has_many :matched_users, foreign_key: :matcher_id, class_name: 'Match'
    has_many :matchees, through: :matched_users

    has_many :matching_users, foreign_key: :matchee_id, class_name: 'Match'
    has_many :matchers, through: :matching_users
end
