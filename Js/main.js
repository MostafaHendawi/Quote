var quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best", author: "Marilyn Monroe" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe", author: "Albert Einstein" },
    { quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.", author: "Dr. Seuss" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on", author: "Robert Frost" }
];

var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');
var newQuoteButton = document.getElementById('newQuote');

var lastIndex = -1;

function getRandomQuote() {
    var randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex == lastIndex);

    lastIndex = randomIndex;
    var randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `~${randomQuote.author}~`;
}

newQuoteButton.addEventListener('click', getRandomQuote);
getRandomQuote();



var x = document.querySelectorAll("button:not(.btn-warning)")
for(var i=0 ; i< x.length ; i++){
    x[i].addEventListener("click", sayhi )
}

function sayhi(){
    console.log("hi");  

}














