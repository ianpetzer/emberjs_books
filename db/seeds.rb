# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

  
great_gatsby = Book.create(
	title: 'The Great Gatsby', 
	promo_link: 'http://www.amazon.com/The-Great-Gatsby-Scott-Fitzgerald/dp/0743273567', 
	author: 'F. Scott Fitzgerald',
    description: 'Set on the East Coast in the roaring ’20s, this American novel is a classic. From it we learn that often the wanting of something is better than actually having it. It is relevant to every man’s life. Furthermore, one true friend is worth infinitely more than a multitude of acquaintances.',
    quote: 'He smiled understandingly-much more than understandingly. It was one of those rare smiles… It faced–or seemed to face–the whole external world for an instant, and then concentrated on you with an irresistible prejudice in your favor.',
  )

the_prince = Book.create(    
    title: 'The Prince',
    promo_link: 'http://www.amazon.com/Prince-Bantam-Classics-Niccolo-Machiavelli/dp/0553212788',
    author: 'Niccolo Machiavelli',
    description: 'Considered by most to be the authoritative text on statesmanship and power (how to obtain it as well as an illustration of its trappings), although certainly a shrewd one.',
    quote: 'From this arises an argument: whether it is better to be loved than feared. I reply that one should like to be both one and the other; but since it is difficult to join them together, it is much safer to be feared than to be loved when one of the two must be lacking.',
  )
slaughterhouse_five = Book.create(
    title: 'Slaughterhouse-Five',
    promo_link: 'http://www.amazon.com/Slaughterhouse-Five-Kurt-Vonnegut/dp/0440180295',
    author: 'Kurt Vonnegut',
    description: 'Through the beloved Billy Pilgrim, we see the central themes of Vonnegut’s humanism along with his satirical take on how disgusting it is when humans don’t use their (limited) free will to prevent simple atrocities. A great example of how we use humor to deal with hardship, and the conflict between the way heroism is conveyed through stories for actions in situations that perhaps could have been avoided altogether.',
    quote: 'So then I understood. It was war that made her so angry. She didn’t want her babies or anybody else’s babies killed in wars. And she thought wars were partly encouraged by books and movies.',
  )
fiction = Tag.create(name: 'Fiction')
non_fiction = Tag.create(name: 'Non-Fiction')
classic = Tag.create(name: 'Classic')
contemporary = Tag.create(name: 'Contemporary')
science_fiction = Tag.create(name: 'Science fiction')
bestseller = Tag.create(name: 'Bestseller')
ideal_gift = Tag.create(name: 'Ideal gift')

great_gatsby.tags << fiction
great_gatsby.tags << classic

good_review = Review.create(
  title: 'Best read ever!!',
  body: "I really enjoyed this. Its hedonistic and exciting."
)

bad_review = Review.create(
  title: 'I\'m not convinced',
  body: "This is a story of indulgence and callous indifference."
)

great_gatsby.reviews << good_review
great_gatsby.reviews << bad_review
