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
        // To debug, uncomment the below code
        // console.log(data[0].q)
        // console.log(data[0].a)

        // To generate random quotes
        const randomIndex = Math.floor(Math.random() * data.length);
        const selectedQuote = data[randomIndex];
        quote.textContent = `"${selectedQuote.q}"`;
        author.textContent = `- ${selectedQuote.a}`;
        // quote.textContent = `${data[1].q}`;
        // author.textContent = ` - ${data[1].a}`
        }

    catch(err){
        console.log("Something happend : ",err)
        quote.textContent = 'OOPS! Something went wrong'
        author.textContent = "";
    }

}

// Initial call to display a quote when the page loads
// getQuote();


