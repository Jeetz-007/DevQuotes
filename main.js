const btn = document.querySelector('button');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');


btn.addEventListener('click',e=>{
    getQuote();
});


// Fetches quotes from the API
async function getQuote(){
    try{
        const response = await fetch("https://jeetz-007.github.io/Quotes/quotes.json")
        if(!response.ok){
            console.log("Error in fetching URL ")
        }
        const data = await response.json();

        // To generate random quotes
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedQuote = data[randomIndex];
        quote.textContent = `"${selectedQuote.q}"`;
        author.textContent = `- ${selectedQuote.a}`;
        }

    catch(err){
        console.log("Something happend : ",err)
        quote.textContent = 'OOPS! Something went wrong'
        author.textContent = "";
    }

}

// Initial call to display a quote when the page loads
// getQuote();




