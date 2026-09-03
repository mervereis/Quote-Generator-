import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const quotes = [
  {
    quote:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    quote: "I should have been more kind.",
    author: "Clive James",
  },
];

function pickRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

app.get("/", (req, res) => {
  console.log("Received a request for a quote");

  const quote = pickRandomQuote();

  res.json(quote);
});

app.post("/", (req, res) => {
  console.log("Received a request to add a quote");

  const newQuote = {
    quote: req.body.quote,
    author: req.body.author,
  };

  quotes.push(newQuote);

  res.send(newQuote);
});

app.listen(port, () => {
  console.log(`Quote server listening on port ${port}`);
});
