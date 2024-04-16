const quoteElement = document.getElementById("quote");  // Use consistent naming conventions
const authorElement = document.getElementById("author");
const quoteApiUrl = "https://api.quotable.io/random";

async function fetchAndDisplayQuote() {  // Descriptive function name
 try {
   const response = await fetch(quoteApiUrl);
   const data = await response.json();

   quoteElement.textContent = data.content;  // Use textContent for better security
   authorElement.textContent = data.author;
 } catch (error) {
   console.error("Error fetching quote:", error);  // Handle potential errors
   // Display an error message to the user if needed
 }
}

fetchAndDisplayQuote();

function shareQuoteOnTwitter() {  // Clearer function name
 const tweetUrl = "https://twitter.com/i/flow/login";
 window.open(tweetUrl, "tweet window", "width=600, height=300");
}

