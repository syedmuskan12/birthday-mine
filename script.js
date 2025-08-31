// Start Page
const startBtn = document.getElementById('start-btn');
const startPage = document.getElementById('start-page');
const countdownPage = document.getElementById('countdown-page');

startBtn.addEventListener('click', () => {
    startPage.classList.add('hidden');
    countdownPage.classList.remove('hidden');
    showMessage(); // show first message on start
});

// 22 Messages
const messages = [
`Day 1: Baby, today your birthday countdown starts 🥳❤️ and I’m honestly more excited than you are 😂. Being with you feels like the easiest happiness—like life finally makes sense. You’re my partner, my closest friend, and my safe place all at once. I thank God every day for sending me you.`,
`Day 2: You have this way of making me feel loved without even trying. The way you care, notice small things about me, and protect me—it melts my heart every time. Love is in these little gestures, and I’ll always be grateful for them.`,
`Day 3: With you, even silence feels beautiful. We don’t need words every second; just sitting with you is enough. You’re my calm in the chaos, my comfort, my safe place. Being with you feels like home.`,
`Day 4: Sometimes I wonder how I got so lucky. Out of everyone in this world, God chose you for me. You’re my love, my closest friend, my shoulder to lean on, my partner in laughter, my forever.`,
`Day 5: The small things you do mean the world to me. Checking on me, understanding my mood, making me feel safe—it’s priceless. You love me better than I ever imagined.`,
`Day 6: You’ve spoiled me for life 😂 No one can make me feel the way you do. Even when we annoy each other, deep down there’s no one else I’d want by my side. You’re my person.`,
`Day 7: No matter how rough my day is, hearing your voice or seeing your message makes it better. You make things lighter and brighter without realizing it. You’re my happiness.`,
`Day 8: I love that I can be completely myself with you—the good, the bad, the crazy—and you still choose me. You never make me feel “too much.” That’s real love, and I’m lucky to have it with you.`,
`Day 9: We fight, annoy each other, and drive each other crazy—but love always wins. At the end of the day, I choose you, and I know you choose me too. That’s what makes us unbreakable.`,
`Day 10: You’re not just my boyfriend—you’re my home. The one I run to when I’m happy, sad, confused, or tired. My heart always finds its way back to you.`,
`Day 11: Just knowing you’re by my side gives me strength. You lift me when I fall, remind me I’m not alone. That kind of love is rare, and I’ll never take it for granted.`,
`Day 12: Sometimes I just smile thinking about you. Out of billions, I get to have you. God sent you for a reason, and I’ll never stop thanking Him.`,
`Day 13: I love how silly we can be together—the inside jokes, dumb talks, laughing at things only we understand 😂. You’re my favorite person to be stupid with.`,
`Day 14: You’ve taught me love doesn’t need to be perfect. It just needs to be real. And what we have is so real. Through ups and downs, I love you and I always will.`,
`Day 15: Every time you hold me close, the world stops for a moment. In your arms, I feel safe, loved, and complete. That’s my favorite feeling in the world.`,
`Day 16: Love with you feels effortless. Nothing is forced—it just flows. You understand me in ways I can’t explain, and everything feels right with you.`,
`Day 17: You inspire me—not because you try, but because of the way you love me. Your strength, kindness, and patience make me want to be my best self. You’re my love and inspiration.`,
`Day 18: If I had a million chances to choose again, I’d still choose you. In every life, every version of me, it will always be you. You’re my destiny.`,
`Day 19: Even ordinary days feel special with you. Simple calls, silly chats, talking about nothing—it all feels magical because it’s with you. That’s why I love you so much.`,
`Day 20: You’re not just part of my life—you ARE my life. My favorite chapter, my most important person, my forever story. My heart belongs with you.`,
`Day 21: Tomorrow’s your big dayyy 🥳🔥 I don’t think I can explain how excited I am. But I celebrate you every day in my heart. Having you is the best thing ever.`,
`Day 22 (Birthday 🎉): Happy Birthday, my love ❤️ Today is all about you, the most special person in my life. You’re my safe place, laughter, strength, my everything. I love you endlessly, today and forever.`
];

const messageEl = document.getElementById("message");
const dayCounterEl = document.getElementById("day-counter");

// Countdown dates
const startDate = new Date("2025-09-01T00:00:00");
const endDate = new Date("2025-09-22T23:59:59");

// Calculate day index
function getTodayIndex() {
    const now = new Date();
    if(now < startDate) return 0;
    if(now > endDate) return messages.length - 1;
    const diffTime = now.getTime() - startDate.getTime();
    return Math.floor(diffTime / (1000*60*60*24));
}

let currentDay = getTodayIndex();

// Show message
function showMessage() {
    const todayIndex = getTodayIndex();
    messageEl.style.opacity = 0; // reset animation
    setTimeout(() => {
        if(currentDay <= todayIndex){
            messageEl.textContent = messages[currentDay];
        } else {
            messageEl.textContent = `🔒 This message is locked. Come again at 12 AM to see it!`;
        }
        messageEl.style.opacity = 1;
    }, 100);
    dayCounterEl.textContent = `Day ${currentDay+1}`;
}

// Navigation
function nextDay() {
    if(currentDay < messages.length - 1){
        currentDay++;
        showMessage();
    }
}
function prevDay() {
    if(currentDay > 0){
        currentDay--;
        showMessage();
    }
}

// Initialize
showMessage();
