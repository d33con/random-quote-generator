$(document).ready(function() {
  
  // Button styling
  $(".quotebutton").mouseenter(function() {
    $(this).css("background-color", "#CAD4D4");
  });

  $(".quotebutton").mouseleave(function() {
    $(this).css("background-color", "#E0EBEB");
  });
  
  // Show quote on page load
  getQuote();
});

function getQuote() {
  
  // Quote and author array
  var quotes = [{
    quote: "People who think they know everything are a great annoyance to those of us who do",
    author: "Isaac Asimov"
  }, {
    quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly",
    author: "Winston Churchill"
  }, {
    quote: "You cannot open a book without learning something",
    author: "Confucius"
  }, {
    quote: "The most important thing is to enjoy your life - to be happy - it's all that matters",
    author: "Audrey Hepburn"
  }, {
    quote: "The first condition of progress is the removal of censorship",
    author: "George Bernard Shaw"
  }, {
    quote: "You are never too old to set another goal or to dream a new dream",
    author: "C.S. Lewis"
  }, {
    quote: "A person who never made a mistake never tried anything new",
    author: "Albert Einstein"
  }, {
    quote: "Beware of false knowledge; it is more dangerous than ignorance",
    author: "George Bernard Shaw"
  }];
  
  // Generate a random quote
  var randNum = Math.floor(Math.random() * quotes.length);
  var quote = quotes[randNum].quote;
  var author = quotes[randNum].author;
  
  // Display the quote & author
  document.getElementById("quotes").innerHTML = quote;

  document.getElementById("author").innerHTML = " - " + author;
  
  // Tweet the quote
  $('.tweetbutton').mouseenter(function() {
    $("a").attr("href", "https://twitter.com/intent/tweet?text=" + quote + " - " + author);
  });

}