function getRandomJoke () {
    let jokes = [
        "What did the tree say when spring arrived? What a re-leaf!",
        "What month of the year has 28 days? All of them.",
        "What do bees use to fix their hair? Honeycombs.",
        "Can February March? No, but April May.",
        "How can you tell if a plant is good at math? It has square roots.",
        "I'd tell you a pizza joke, but it's a bit too cheesy.",
        "Two kittens had an argument. It ended in a cat-astrophe.",
        "Where do cows go on dates? To the moo-vies.",
        "What do you call a duck that likes the Fourth of July? A fire-quacker.",
        "A horse goes into a restaurant. The host says, \"Hey!\" The horse replies, \"You read my mind.\"",
        "What did the envelope say to the stamp? \"Stick with me and we'll go places.\"",
        "What did the ocean say to the beach? Nothing. It just waved.",
        "Why can't you trust stairs? They're always up to something.",
        "I don't like artists. They tend to be sketchy."
    ];
    
    // source of these jokes https://www.today.com/life/inspiration/bad-jokes-rcna58390

    return jokes[Math.floor(Math.random() * jokes.length)];
}



function logJoke() {
    console.log(getRandomJoke());
}

logJoke();