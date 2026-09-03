const API_URL = "http://127.0.0.1:3000";

const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const newQuoteButton = document.querySelector("#new-quote-button");

const quoteForm = document.querySelector("#quote-form");
const quoteInput = document.querySelector("#quote-input");
const authorInput = document.querySelector("#author-input");
const messageElement = document.querySelector("#message");

async function getQuote() {
  const response = await fetch(API_URL);

  const quote = await response.json();

  quoteElement.textContent = `"${quote.quote}"`;
  authorElement.textContent = `- ${quote.author}`;
}

async function addQuote(event) {
  event.preventDefault();

  const newQuote = {
    quote: quoteInput.value,
    author: authorInput.value,
  };

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newQuote),
  });

  const savedQuote = await response.json();

  quoteElement.textContent = `"${savedQuote.quote}"`;
  authorElement.textContent = `- ${savedQuote.author}`;

  messageElement.textContent = "Quote added successfully!";

  quoteInput.value = "";
  authorInput.value = "";
}

newQuoteButton.addEventListener("click", getQuote);

quoteForm.addEventListener("submit", addQuote);
