# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131113061018) do

  create_table "collaborators", force: true do |t|
    t.integer  "wiki_id"
    t.integer  "user_id"
    t.string   "wiki_role"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "collaborators", ["user_id"], name: "index_collaborators_on_user_id", using: :btree
  add_index "collaborators", ["wiki_id"], name: "index_collaborators_on_wiki_id", using: :btree

  create_table "users", force: true do |t|
    t.string   "name",                               null: false
    t.string   "password_digest", default: "",       null: false
    t.string   "email",           default: "",       null: false
    t.string   "role",            default: "member"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "token"
    t.date     "confirmed_at"
    t.integer  "cur_wiki"
  end

  add_index "users", ["confirmed_at"], name: "index_users_on_confirmed_at", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", using: :btree

  create_table "wikis", force: true do |t|
    t.string   "title"
    t.text     "description"
    t.boolean  "public",      default: true
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "user_id"
    t.string   "slug"
  end

  add_index "wikis", ["user_id"], name: "index_wikis_on_user_id", using: :btree

  add_foreign_key "collaborators", "users", name: "collaborators_user_id_fk", dependent: :delete
  add_foreign_key "collaborators", "wikis", name: "collaborators_wiki_id_fk", dependent: :delete

end
