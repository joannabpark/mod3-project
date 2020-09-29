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

User.create(name:"JoAnna", age:"29", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"cats", occupation:"Software Engineering Student", interests:"Yoga, running, horror movies", location: "Chicago", phone_number:"123-456-7890", email_address:"jojo@gmail.com", veggie_type:"Lacto-ovo", bio: "I play hard. I play fast.")
User.create(name:"Bob", age:"30", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Plumber", interests:"Netflix", location: "Chicago", phone_number:"123-456-7890", email_address:"bob@gmail.com", veggie_type:"Lacto-ovo", bio: "I never gave a fuck")
User.create(name:"Annie", age:"23", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I was born on a cold and rainy night in November")
User.create(name:"Kelly", age:"27", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I like turtles")
User.create(name:"Liz", age:"40", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "I am in witness protection")
User.create(name:"Nilay", age:"35", image_url:"https://media-exp1.licdn.com/dms/image/C4E03AQHhY1RZEx-PxA/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=FnBCpg2_FgjlfED6P5DsmHrU6ki7abEYmaS4VhlQHPo", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto", bio: "My mom and dad are cousins")

puts "Complete!"