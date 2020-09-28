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

ActiveRecord::Schema.define(version: 2020_09_28_033539) do

  create_table "matches", force: :cascade do |t|
    t.integer "user_id_id", null: false
    t.integer "other_user_id_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["other_user_id_id"], name: "index_matches_on_other_user_id_id"
    t.index ["user_id_id"], name: "index_matches_on_user_id_id"
  end

  create_table "other_users", force: :cascade do |t|
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
  end

  add_foreign_key "matches", "other_user_ids"
  add_foreign_key "matches", "user_ids"
end
