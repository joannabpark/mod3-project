# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_28_211650) do

  create_table "matches", force: :cascade do |t|
    t.integer "matcher_id", null: false
    t.integer "matchee_id", null: false
    t.index ["matchee_id"], name: "index_matches_on_matchee_id"
    t.index ["matcher_id"], name: "index_matches_on_matcher_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.string "image_url"
    t.string "attracted_to"
    t.string "occupation"
    t.string "interests"
    t.string "location"
    t.string "phone_number"
    t.string "email_address"
    t.string "veggie_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "bio"
  end

  add_foreign_key "matches", "matchees"
  add_foreign_key "matches", "matchers"
end
