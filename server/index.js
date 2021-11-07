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


app.get("/api/poems", (req, res) => {
  const poems = ["Margaret Atwood You fit into me. you fit into me like a hook into an eye a fish hook an open eye",
  'EZRA POUND “IN A STATION OF THE METRO” ANAIS NIN “RISK” And then the day came,when the risk to remain tight in a bud was more painful than the risk it took to blossom.',
  'HENRY DAVID THOREAU “MY LIFE HAS BEEN THE POEM I WOULD HAVE WRIT” My life has been the poem I would have writ But I could not both live and utter it.',
    
    
    

  ];

  let randomIndex = Math.floor(Math.random() * poems.length);
  let randomPoem = poems[randomIndex];
  
  res.status(200).send(randomPoem);

})


app.get("/api/motivation", (req, res) => {
  const motivation = [ 'There are two ways of spreading light: to be the candle or the mirror that reflects it. – Edith Wharton',
  'You do not find the happy life. You make it. – Camilla Eyring Kimball',
  'The most wasted of days is one without laughter. – E.E. Cummings',
  'Stay close to anything that makes you glad you are alive. – Hafez',
    
    

  ];

  let randomIndex = Math.floor(Math.random() * motivation.length);
  let randomMotivation = motivation[randomIndex];
  
  res.status(200).send(randomMotivation);

})



app.listen(4000, () => console.log("Server running on 4000"));




