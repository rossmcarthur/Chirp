# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 User.destroy_all
 Relationship.destroy_all
 Post.destroy_all

user1 = User.create!(email: 'ross@gmail.com' , password: 'whatever', username: 'DaMan')
user2 = User.create!(email: 'matt@gmail.com', password: 'whatever', username: 'WhoDis?')
user3 = User.create!(email: 'warlin@gmail.com', password: 'whatever', username: 'YaBoi')

relationship1 = Relationship.create!(follower_id: user1.id, followed_id: user3.id)

chirp1 = Post.create!(author_id: user1.id, body: 'Whoa!')
chirp2 = Post.create!(author_id: user3.id, body: 'Whats the deal?')
chirp3 = Post.create!(author_id: user3.id, body: 'So cool!')
chirp4 = Post.create!(author_id: user2.id, body: 'Express yourself!')
chirp5 = Post.create!(author_id: user1.id, body: 'this is my second chirp!')
chirp6 = Post.create!(author_id: user3.id, body: 'this is my third chirp!')
chirp7 = Post.create!(author_id: user3.id, body: 'Show me your moves!')
chirp8 = Post.create!(author_id: user2.id, body: 'this is my second chirp!')
chirp9 = Post.create!(author_id: user1.id, body: 'Stop the clock!')
chirp10 = Post.create!(author_id: user3.id, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.')
chirp11 = Post.create!(author_id: user3.id, body: 'quis nostrud exercitation
 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
   Excepteur sint occaecat cupidatat non proident,')
chirp12 = Post.create!(author_id: user3.id, body: 'ea commodo consequat. Duis aute irure dolor in
 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
   mollit anim id est laborum.')
chirp13 = Post.create!(author_id: user2.id, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor')
chirp14 = Post.create!(author_id: user1.id, body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
     reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
       mollit anim id est laborum.')
chirp15 = Post.create!(author_id: user2.id, body: 'veniam, quis nostrud exercitation
 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
   Excepteur sint occaecat cupidatat non proident, sunt')
chirp16 = Post.create!(author_id: user3.id, body: 'rud exercitation
 ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese')
