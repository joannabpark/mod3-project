class User < ApplicationRecord
    has_many :initiated_matches, foreign_key: :matcher_id, class_name: 'Match'
    has_many :matchees, through: :initiated_matches

    has_many :accepted_matches, foreign_key: :matchee_id, class_name: 'Match'
    has_many :matchers, through: :accepted_matches
end