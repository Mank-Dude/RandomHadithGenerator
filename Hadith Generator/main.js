let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    '“Those who are the means for good deeds are the same as those who perform good deeds.” [Tirmidhi, Al-Ilm (Knowledge); 14]',
    '“Who cheats us is not one of us.” [Muslim, Al-Iman (Faith); 164]',
    'Beware of suspicion for it is the most untruthful type of speech.',
    '“Not one of you can (truly) believe if you do not want for your (believing) brother what you want for yourself.” [Bukhari, Al-Iman (Faith);]',
    '“He who is not merciful to our young (people) and who shows no respect to our elderly is not one of us.” [Tirmidhi, Al Birr (Virtue); 15]',
    '“You cannot enter heaven until you believe, and you will not truly believe until you (truly) love one another.” [Muslim, Al-Iman (Faith); 93]',
    '“No father has ever given a child a gift that is superior to good manners.” [Tirmidhi, Al-Birr (Virtue); 33]',
];
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})