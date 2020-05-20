michelle = User.create(username: "Michelle", password: "abc123")
otha = User.create(username: "Otha", password: "abc123")

restaurants = [
    { name: "Delights & Desserts",
      location: "23rd Bleek St & Providence",
      category: "Snacks",
      rating: 3.9,
      price_range: "$"
    },
    { name: "Prince Pizza",
      location: "Prince Street",
      category: "Pizza",
      rating: 4.2,
      price_range: "$$$"
    },
    { name: "Dos Toros Taqueria",
      location: "555 8th Ave",
      category: "Mexican",
      rating: 3.2,
      price_range: "$$"
    },
    { name: "Los Tacos No.1",
      location: "75 9th Ave",
      category: "Mexican",
      rating: 4.7,
      price_range: "$$$$"
    },
    { name: "The Modern",
      location: "9 W 53rd St",
      category: "French",
      rating: 4.3,
      price_range: "$$$$"
    },
    { name: "Via Carota",
      location: "51 Grove St",
      category: "Italian",
      rating: 4.6,
      price_range: "$$$$$"
    }
]


Restaurant.create(restaurants)

# michelle_review = Review.create(user: michelle)

# michelle_review.reviews << Review.third
# michelle_review.reviews << Review.fourth
# michelle_review.reviews << Review.fifth

# otha_review = Order.create(user: otha)

# otha_review.reviews << Review.all.sample
# otha_review.reviews << Review.all.sample
# otha_review.reviews << Review.all.sample
# otha_review.reviews << Review.all.sample
