document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const mainContent = document.getElementById('main-content');
    const fadeDuration = 2000; // duration in milliseconds

    // Initially show the welcome message
    welcomeMessage.style.opacity = '1';
    mainContent.style.opacity = '0'; // Ensure main content is hidden initially

    // After 3 seconds, start fading out the welcome message
    setTimeout(() => {
        welcomeMessage.style.opacity = '0';
        // After fade out, hide welcome message and show main content
        setTimeout(() => {
            welcomeMessage.style.display = 'none'; // Hide welcome message
            mainContent.style.visibility = 'visible'; // Make main content visible
            mainContent.style.opacity = '1'; // Fade in main content
        }, fadeDuration);
    }, 3000); // Delay before starting fade out
});
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "If you want to lift yourself up, lift up someone else.",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "It always seems impossible until it's done. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Act as if what you do makes a difference. It does. - William James",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Everything you’ve ever wanted is on the other side of fear. - George Addair",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
    "If you don’t build your dream, someone else will hire you to help them build theirs. - Dhirubhai Ambani",
    "To live a creative life, we must lose our fear of being wrong. - Joseph Chilton Pearce",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You do not find the happy life. You make it. - Camilla E. Kimball"
    
];

const quoteDisplay = document.getElementById('quote');
const newQuoteButton = document.getElementById('new-quote');

newQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteDisplay.textContent = quotes[randomIndex];
});

// Add this to your script.js
const shareQuoteButton = document.getElementById('share-quote');

shareQuoteButton.addEventListener('click', () => {
    const quoteText = quoteDisplay.textContent;
    const shareURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(shareURL, '_blank');
});
