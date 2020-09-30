require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Match.destroy_all

puts "Starting Seed"
puts "Seeding Users"

User.create(name:"JoAnna", age:"29", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"cats", occupation:"Software Engineering Student", interests:"Yoga, running, horror movies", location: "Chicago", phone_number:"123-456-7890", email_address:"jojo@gmail.com", veggie_type:"Lacto-ovo", bio: "I play hard. I play fast.", password: "123")
User.create(name:"Bob", age:"30", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Plumber", interests:"Netflix", location: "Chicago", phone_number:"123-456-7890", email_address:"bob@gmail.com", veggie_type:"Lacto-ovo", bio: "I never gave a fuck", password: "123")
User.create(name:"Annie", age:"23", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I was born on a cold and rainy night in November", password: "123")
User.create(name:"Kelly", age:"27", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I like turtles", password: "123")
User.create(name:"Liz", age:"40", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I am in witness protection", password: "123")
User.create(name:"Nilay", age:"35", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "My mom and dad are cousins", password: "123")
User.create(name:"Josue", age:"22", image_url:"data:image/jpeg;base64,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", attracted_to:"female", occupation:"student", interests:"sports", location: "Chicago", phone_number:"123-456-7890", email_address:"josue@gmail.com", veggie_type:"Lacto", bio: "Meat = Evil", password: "123")


10.times do 
    User.create(name: Faker::Name.name, age: Faker::Number.between(from: 18, to: 100), image_url: Faker::LoremFlickr.image, attracted_to: Faker::Gender.binary_type, occupation: Faker::Job.title, interests: "salads", location: Faker::Address.city, phone_number: Faker::PhoneNumber.cell_phone, email_address: Faker::Internet.free_email, veggie_type: Faker::Food.vegetables, bio:Faker::Quote.most_interesting_man_in_the_world, password: "123")
end 

puts "Seeding Matches"

Match.create(matcher_id: User.first.id, matchee_id: User.second.id)
Match.create(matcher_id: User.first.id, matchee_id: User.fourth.id)
Match.create(matcher_id: User.third.id, matchee_id: User.fourth.id)

puts "Complete!"