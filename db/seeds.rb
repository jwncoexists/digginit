require 'faker'

w = Wiki.new(title:'digginIt', 
            description: "The free encyclopedia with articles created and edited by users around the world.")
w.save
9.times do
  w = Wiki.new(
    title: Faker::Lorem.words(rand(1..10)).join(" "),
    description: Faker::Lorem.paragraphs(rand(1..4)).join("\n")
    )
  w.save
end

puts "DB Seed finished"
puts "#{Wiki.count} wikis created"
