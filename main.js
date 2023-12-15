function random(min , max) {
    const num = Math.round(Math.random() * (max));
    return num;
}


function randomQuote() {
        var quote=[`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einsteinb`
    ,`“Be the change that you wish to see in the world.”
    ― Mahatma Gandhi` ,`“In three words I can sum up everything I've learned about life: it goes on.”
    ― Robert Frost`,`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
    ― J.K. Rowling, Harry Potter and the Goblet of Fire`,`“Live as if you were to die tomorrow. Learn as if you were to live forever.”
    ― Mahatma Gandhi`,`“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”
    ― John Green, The Fault in Our Stars`,`“Life isn't about finding yourself. Life is about creating yourself.”
    ― George Bernard Shaw`,`“Today you are You, that is truer than true. There is no one alive who is Youer than You.”
    ― Dr. Seuss, Happy Birthday to You!`,`“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”
    ― Albert Einstein
    `]

    var w =random(0 , quote.length-1)
    
    document.getElementById("Demo").innerHTML=quote[w]
}

