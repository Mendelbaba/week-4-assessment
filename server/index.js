const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const malaphors = ["You opened this can of worms, now you gotta sleep in it.",
"We will burn that bridge when we get there.",
"There's more than one way to beat a dead horse",
"Dont count your blessings before they hatch.",
"If it ain’t rocket surgery, don’t fix it.",
"You can kill two birds in the hand with one stone in a bush",
"	He doesn't have a leg to stand on or a window to throw it out of."

];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.",
    "A dubious friend may be an enemy in camouflage.",
    "A faithful friend is a strong defense.",
    "A feather in the hand is better than a bird in the air.",
    "A fresh start will put you on your way.",

  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);

})

app.get("/api/malaphors", (req, res) => {
  // const malaphors = ["You opened this can of worms, now you gotta sleep in it.",
  //   "We will burn that bridge when we get there.",
  //   "There's more than one way to beat a dead horse",
  //   "Dont count your blessings before they hatch.",
  //   "If it ain’t rocket surgery, don’t fix it.",
  //   "You can kill two birds in the hand with one stone in a bush",
  //   "	He doesn't have a leg to stand on or a window to throw it out of."

  // ];

  let randomIndex = Math.floor(Math.random() * malaphors.length);
  let randomMalaphor = malaphors[randomIndex];
  
  res.status(200).send(randomMalaphor);

})

app.post("/api/malaphors",(req,res) => {
  console.log('click')
})
// const taskList = []
// app.post("/api/toDoList", (req, res) => {
  // console.log('click')
  // let newTask = req.body
  // taskList.push(newTask);
  // res.status(200).send(taskList);
// })




app.listen(4000, () => console.log("Server running on 4000"));




// app.delete(`/api/houses/:id`, deleteHouse)
// app.post(`/api/houses`, createHouse)
// app.put(`/api/houses/:id`, updateHouse)