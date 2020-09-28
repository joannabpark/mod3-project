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

User.create(name:"JoAnna", age:"29", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Fcute-little-girl-playing-violin-vector-26473357&psig=AOvVaw17GQ8TqReWg22yXfwUK_43&ust=1601389927337000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODB38OIjOwCFQAAAAAdAAAAABAD", attracted_to:"cats", occupation:"Software Engineering Student", interests:"Yoga, running, horror movies", location: "Chicago", phone_number:"123-456-7890", email_address:"jojo@gmail.com", veggie_type:"Lacto-ovo")
User.create(name:"Bob", age:"30", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2F13942203%2Fstock-illustration-cartoon-man-eating-salad.html&psig=AOvVaw1HldO4bXBZ08nIW0S6Mzaj&ust=1601390755188000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCc8c2LjOwCFQAAAAAdAAAAABAD", attracted_to:"female", occupation:"Plumber", interests:"Netflix", location: "Chicago", phone_number:"123-456-7890", email_address:"bob@gmail.com", veggie_type:"Lacto-ovo")
User.create(name:"Annie", age:"23", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fwoman-eating-salad-cartoon.html&psig=AOvVaw1pNl7PzCOVwhhRweMSe6AA&ust=1601390902191000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCTmZWMjOwCFQAAAAAdAAAAABAD", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto")
User.create(name:"Kelly", age:"27", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fwoman-eating-salad-cartoon.html&psig=AOvVaw1pNl7PzCOVwhhRweMSe6AA&ust=1601390902191000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCTmZWMjOwCFQAAAAAdAAAAABAD", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto")
User.create(name:"Liz", age:"40", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fwoman-eating-salad-cartoon.html&psig=AOvVaw1pNl7PzCOVwhhRweMSe6AA&ust=1601390902191000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCTmZWMjOwCFQAAAAAdAAAAABAD", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto")
User.create(name:"Nilay", age:"35", image_url:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fwoman-eating-salad-cartoon.html&psig=AOvVaw1pNl7PzCOVwhhRweMSe6AA&ust=1601390902191000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCTmZWMjOwCFQAAAAAdAAAAABAD", attracted_to:"female", occupation:"Teacher", interests:"Baking", location: "Chicago", phone_number:"123-456-7890", email_address:"Annie@gmail.com", veggie_type:"Lacto")



puts "Complete!"