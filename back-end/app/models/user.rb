class User < ApplicationRecord
    has_many :matches
    has_many :other_users, through: :matches
end
