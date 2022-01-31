/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
const quotes = []; //this is an empty array in which all the objects will be pushed 

// These are the five objects created which have quotes, source, citation and year as its propetries 
let quote1 = {quote: 'All endings are also beginnings, We just know it at that time.' , source:'Mitch Albom' , citation: 'The Five People You Meet In Heaven (Book)', year:2003  };
let quote2 = {quote: "There's no place like home", source: "John Payne", citation: 'Home Sweet Home (Song)' , year: 1823 }
let quote3 = {quote:'Everybody is a genius. But if you will judge a fish by its ability to climb a tree, it will live its whole life believing it is stupid. ' , source:'Albert Einstein', year: 1932  };
let quote4 = {quote: 'Every human life is worth the same, and worth saving.' , source: 'J.K. Rowling', citation:'Harry Potter and the Deathly Hallows (Book)' , year: 2007 };
let quote5 =  {quote: "Someone leaves because it's someone else about to arrive", source: "Paulo Coelho", year: 1949 };
 
 // the five objects created above are pushed into the empty array one by one using .push()
 quotes.push(quote1);
 quotes.push(quote2);
 quotes.push(quote3);
 quotes.push(quote4);
 quotes.push(quote5);
 console.log(quotes);




/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  
    //random variable to store generated random number 
    const randomQuote = Math.floor(Math.random() * quotes.length) + 1;
    
    let ranquote = quotes[randomQuote]; //ranquote variable to store properties of objects in the quotes array 
    return ranquote;
  }
  

/***
 * `printQuote` function
***/
function printQuote(){
// a variable that calls the getRandomQuote() function  
    let RandomQuote = getRandomQuote();
    
//variable that initiates HTML string with    
    // the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off    
    // the second closing `</p>` tag 
    let PtoHTML1 = "<p class='quote'>" +RandomQuote.quote + "<p class='source'>" + RandomQuote.source;
    
   
// if statement to check if the citation property    
// exists, and if it does, concatenate a <span></span>    
// element, appropriate className, and citation property    
// to the HTML string 
    if(quotes.citation = true){
    
        PtoHTML1 += "<span class ='citation' >" + RandomQuote.citation+"</span>";
    }

//if statement to check of the year property exists,    
// and if it does, concatenate a <span></span> element,    
// appropriate className, and year property to the HTML    
//string 
    if(quotes.year = true){
     
      PtoHTML1 += "<span class ='year' >" + RandomQuote.year +"</span>";
    }
//setting the innerHTML of the quote-box div to equal the    
//complete HTML string 
    document.getElementById('quote-box').innerHTML = PtoHTML1;
}
  



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//event listener to respond to click
document.getElementById('load-quote').addEventListener("click", printQuote, false);