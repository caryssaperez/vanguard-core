users = User.create([
  {
    email: "v@vanguard.com",
    name: "V",
    password: "testinguser1"
  },
  {
    email: "a@vanguard.com",
    name: "A",
    password: "testinguser2"
  }
])

Arc.create([
  {
    title: "The Life and Death of Anakin Skywalker",
    creator: users.first
  },
  {
    title: "The Rise of Darth Revan",
    creator: users.second
  }
])
