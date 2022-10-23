const quotes = [
  {
    quote: `"Education has for its object the formation of character."`,
    author: "- Herbert Spencer -",
  },
  {
    quote: `"To love is to receive a glimpse of heaven."`,
    author: "- Karen Sunde -",
  },
  {
    quote: `"We cannot be sure of having something to live for unless we are willing to die for it"`,
    author: "- Ernesto Che Guevara -",
  },
  {
    quote: `"The future is here. It's just not widely distributed yet."`,
    author: "- William Gibson -",
  },
];

const quote = document.querySelector("#quote h5:first-child");
const author = document.querySelector("#quote h5:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
