const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const hook = ["look", "remember", "never forget", "dont worry", "chin up", "stay strong"]

const quote = ["it is what it is"]

let currentQuote = ""

const generate_quote = (day) => {
    let chosenHook = hook[Math.floor(Math.random() * hook.length)];
    let chosenQuote = quote[Math.floor(Math.random() * quote.length)];
    currentQuote = `${day}'s quote: ${chosenHook}, ${chosenQuote}`;
    return currentQuote;
}

console.log(generate_quote("Monday"))