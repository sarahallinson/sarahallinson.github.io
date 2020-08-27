$(document).ready(function(){

// Consistent terms:

var posterDate = "28.08.20";
var posterSub = "Online poster exhibition";
var posterCred = "MADA";

$(".posterDate").html(posterDate);
$(".posterSub").html(posterSub);
$(".posterCred").html(posterCred);

// Random words:

// astrological sign
var signSymbol = [
	"\u2648",
	"\u2649",
	"\u264a",
	"\u264b",
	"\u264c",
	"\u264d",
	"\u264e",
	"\u264f",
	"\u2650",
	"\u2651",
	"\u2652",
	"\u2653"
];

var signWord = [
	"an Aries",
	"a Taurus",
	"a Gemini",
	"a Cancer",
	"a Leo",
	"a Virgo",
	"a Libra",
	"a Scorpio",
	"a Sagittarius",
	"a Capricorn",
	"an Aquarius",
	"a Pisces"
];

var signColour = [
	"brown", //aries
	"darkorange", //taurus
	"gold", //gemini
	"crimson", //cancer
	"#009900", //leo
	"seagreen", //virgo
	"teal", //libra
	"royalblue", //scorpio
	"navy", //sagittarius
	"indigo", //capricorn
	"purple", //aquarius
	"#990099" //pisces
];

//pick random sign
var signIndex = Math.floor(Math.random()*signWord.length);
//get symbol and word from array, index needs to match
var randomSignWord = signWord[signIndex]; 
var randomSignSymbol = signSymbol[signIndex];
//get colour from index as well
let root = document.documentElement;
root.style.setProperty('--sign', signColour[signIndex]); //css variable

// verb action
var word2 = [
  "Believe in",
  "Beware",
  "Do not forget",
  "Do not forsake",
  "Find",
  "Seek out",
  "Seek wisdom from",
  "Search for inner truth within",
  "Conspire with",
  "Align your innate energies with",
  "Closely watch",
  "Be watchful for",
  "Forget",
  "Forsake",
  "Find balance in",
  "Search for",
  "Try to find",
  "Keep an eye out for",
  "Use astral projection to find",
  "Seek peace from",
  "Do not believe",
  "Feel the energies of",
  "Feel out",
  "Be consumed by",
  "Consume",
  "Devour",
  "From higher powers you will be granted",
  "Treasure",
  "Find humility in"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

// noun idea
// most words from: http://www.learntarot.com/chmaj.htm
// possible to do: re-work to correspond to actual tarot cards
var word3 = [
  "the heart of the cards",
  "the beginning of everything",
  "faith",
  "the apparent folly",
  "action",
  "conscious awareness",
  "concentration",
  "power",
  "non-action",
  "unconscious awareness",
  "potential",
  "mystery",
  "motherhood",
  "abundance",
  "your senses",
  "nature",
  "fatherhood",
  "structure",
  "authority",
  "regulation",
  "education",
  "belief systems",
  "conformity",
  "group identification",
  "relationships",
  "sexuality",
  "personal beliefs",
  "values",
  "victory",
  "will",
  "self-assertion",
  "hard control",
  "strength",
  "patience",
  "compassion",
  "soft control",
  "introspection",
  "searching",
  "guidance",
  "solitude",
  "destiny",
  "turning points",
  "movement",
  "personal vision",
  "justice",
  "responsibility",
  "decisions",
  "cause and effect",
  "the letting go of things",
  "reversals",
  "suspension of disbelief",
  "sacrifice",
  "the ending of everything",
  "transition",
  "elimination",
  "inexorable forces",
  "temperance",
  "balance",
  "health",
  "the combination of things",
  "bondage",
  "materialism",
  "ignorance",
  "hopelessness",
  "sudden change",
  "slow changes",
  "release",
  "downfall",
  "revelation",
  "hope",
  "inspiration",
  "generosity",
  "serenity",
  "fear",
  "illusion",
  "imagination",
  "bewilderment",
  "enlightenment",
  "greatness",
  "vitality",
  "assurance",
  "judgement",
  "rebirth",
  "reincarnation",
  "your inner calling",
  "absolution",
  "integration",
  "accomplishment",
  "involvement",
  "fulfillment",
  "challenge",
  "existence",
  "existential crisis",
  "criticism",
  "fascination",
  "valiant effort"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

// reason
var reasonWord = [
  "for it may destroy you",
  "for it may destroy you otherwise",
  "for it will complete you",
  "so you may find absolution",
  "since life is for living",
  "as it may conspire against you otherwise",
  "for it will inspire you",
  "so you can find your purpose in life",
  "so you can enjoy your life to the fullest",
  "for it will lead to escape",
  "or else you will face a lonely existence",
  "or you may live a lonely life",
  "so you can live a life well led",
  "so you can destroy it",
  "for this is the solution to life's problems",
  "for you will find solace beyond lies",
  "so you may see through lies and trickery",
  "so you may deceieve others",
  "so you can change the world",
  "so you can move beyond this plane of existence",
  "so you can astral travel into the realm of the dead",
  "so you can astral travel into a vision of the future",
  "for this will assure the future",
  "for this will right all wrongs",
  "for this will ensure victory in the duel of life",
  "so you may live a long life",
  "in order to break through invasive energies",
  "in order to cleanse yourself of negative energies",
  "for this will protect you from harm",
  "for this will protect you from psychic attacks from the astral plane",
  "or else you will receieve psychic damage"
];

var randomReason = reasonWord[Math.floor(Math.random()*reasonWord.length)];

// yugioh joke :/// couldn't resist, rare chance
if ((randomWord2 === "believe in") && (randomWord3 === "the heart of the cards")) {
	randomReason = "for this will allow you to draw all five pieces of Exodia the Forbidden One";
}

// set words
$( ".signSymbol" ).html(randomSignSymbol);
$( ".signWord" ).html(randomSignWord);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".reasonWord" ).html(randomReason);


// bonus: random tarot card (major arcana only)
// images from wikimedia commons
var tarotCard = [
  "\"https://upload.wikimedia.org/wikipedia/commons/0/09/The_Illustrated_Key_to_the_Tarot_p._81.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/1/10/The_Illustrated_Key_to_the_Tarot_p._41.png\"", 
  "\"https://upload.wikimedia.org/wikipedia/commons/1/11/The_Illustrated_Key_to_the_Tarot_p._43.png\"", 
  "\"https://upload.wikimedia.org/wikipedia/commons/1/1a/The_Illustrated_Key_to_the_Tarot_p._45.png\"", 
  "\"https://upload.wikimedia.org/wikipedia/commons/7/74/The_Illustrated_Key_to_the_Tarot_p._47.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/9/95/The_Illustrated_Key_to_the_Tarot_p._49.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/1/18/The_Illustrated_Key_to_the_Tarot_p._51.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/5/5d/The_Illustrated_Key_to_the_Tarot_p._53.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/6/69/The_Illustrated_Key_to_the_Tarot_p._55.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/3/36/The_Illustrated_Key_to_the_Tarot_p._57.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/0/05/The_Illustrated_Key_to_the_Tarot_p._59.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/d/d9/The_Illustrated_Key_to_the_Tarot_p._61.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/5/52/The_Illustrated_Key_to_the_Tarot_p._63.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/a/a5/The_Illustrated_Key_to_the_Tarot_p._65.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/6/61/The_Illustrated_Key_to_the_Tarot_p._67.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/f/fa/The_Illustrated_Key_to_the_Tarot_p._69.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/9/92/The_Illustrated_Key_to_the_Tarot_p._71.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/0/09/The_Illustrated_Key_to_the_Tarot_p._73.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/3/36/The_Illustrated_Key_to_the_Tarot_p._75.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/6/69/The_Illustrated_Key_to_the_Tarot_p._77.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/5/51/The_Illustrated_Key_to_the_Tarot_p._79.png\"",
  "\"https://upload.wikimedia.org/wikipedia/commons/8/86/The_Illustrated_Key_to_the_Tarot_p._83.png\""
];

// pick random card
// 1
var cardIndex = Math.floor(Math.random()*tarotCard.length);
root.style.setProperty('--card', "url(" + tarotCard[cardIndex] + ")");
// 2
var cardIndex2 = Math.floor(Math.random()*tarotCard.length);
root.style.setProperty('--card2', "url(" + tarotCard[cardIndex2] + ")");
// 3
var cardIndex3 = Math.floor(Math.random()*tarotCard.length);
root.style.setProperty('--card3', "url(" + tarotCard[cardIndex3] + ")");

});