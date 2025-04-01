const twitterBtn = document.getElementById("twitter");
const whatsappBtn = document.getElementById("whatsapp");
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const greetingText = document.getElementById("greeting");
const shoutoutContainer = document.querySelector(".shoutout-container");
const quotegreeting = document.querySelector(".quote-greeting");
const quoteBtn = document.getElementById("new-quote-btn");
const cornerLink = document.querySelector(".corner-link");
var site = "Hello";

var quoteArray = [
  "Eid Mubarak! May this Eid bring happiness, peace, and prosperity to you and your loved ones.",
  "On this joyous occasion of Eid-ul-Fitr, may Allah bless you with good health, success, and endless happiness.",
  "Wishing you and your family a joyous and blessed Eid. May this special day bring peace and harmony to all.",
  "May the magic of Eid fill your heart with joy and open new doors of success. Eid Mubarak!",
  "As we celebrate Eid, let’s not forget to be grateful for the countless blessings we have. Eid Mubarak!",
  "Eid is a time for joy, a time for togetherness, a time to remember Allah’s blessings. Wishing you and your family a very Happy Eid!",
  "May Allah’s divine blessings fill your life with joy and prosperity. Eid Mubarak!",
  "On this blessed occasion, I pray that your life is filled with happiness, your heart with love, and your mind with wisdom. Eid Mubarak!",
  "Eid Mubarak! May this day be filled with laughter, love, and the warmth of family and friends.",
  "Let this Eid be a time of reflection, forgiveness, and gratitude. Wishing you a blessed and peaceful Eid!",
  "May this Eid bring endless moments of joy and love in your life. Eid Mubarak to you and your family!",
  "On this auspicious occasion, may Allah accept all your prayers and forgive all your sins. Wishing you a blessed Eid!",
  "The beauty of Eid is in the unity it brings. May this special day strengthen your faith and bring peace to your heart. Eid Mubarak!",
  "Eid is not just a festival, it is a day to be grateful for all the blessings we have. Wishing you a very happy and prosperous Eid!",
  "May this Eid bring you closer to your family, strengthen your faith, and fill your heart with love. Eid Mubarak!",
  "Wishing you a joyous Eid filled with love, peace, and prosperity. Eid Mubarak!",
  "May the joy of Eid fill your home with laughter and happiness. Eid Mubarak!",
  "On this holy occasion, may Allah bless you with strength, patience, and unwavering faith. Eid Mubarak!",
  "Sending warm wishes on Eid! May Allah shower his countless blessings upon you and your loved ones.",
  "May the spirit of Eid bring peace and happiness to your heart. Wishing you a beautiful and blessed Eid!",
  "Eid Mubarak! May your home be filled with the laughter of loved ones and the joy of togetherness.",
  "Celebrate this day with a heart full of gratitude and a soul filled with peace. Eid Mubarak!",
  "May this Eid mark the beginning of a successful and prosperous year for you and your family. Eid Mubarak!",
  "Let’s celebrate this joyous occasion with love, kindness, and gratitude. Wishing you a blessed Eid!",
  "May the light of Eid illuminate your path towards success and happiness. Eid Mubarak!",
  "https://youtu.be/uaR9Ge1JG2E?si=BzmODN_TwORiITey",
  "https://youtu.be/9EiEvM8xnBs?si=BF3raMNLdmhuTzic",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quoteArray.length);
  var newQuote = quoteArray[randomNumber];
  quoteText.innerHTML = newQuote;

  // Reset styles first
  quoteContainer.style.backgroundColor = "white";
  quoteContainer.style.color = "black";
  quoteContainer.style.fontWeight = "normal";
  document.body.style.backgroundColor = "#f5f5f5"; // Default body background

  // Apply styles based on quote content
  if (newQuote.includes("Eid Mubarak")) {
    quoteContainer.style.backgroundColor = "#ffeb3b"; // Yellow background
    quoteContainer.style.color = "#d32f2f"; // Dark red text
    quoteContainer.style.fontWeight = "bold";
    document.body.style.backgroundColor = "#fff3cd"; // Light yellow body bg
  } else if (newQuote.includes("https://")) {
    quoteContainer.style.background =
      "linear-gradient(to right, #4B0000, #200000)"; // Blue background for links
    quoteContainer.style.color = "white";
    document.body.style.background =
      "linear-gradient(to right, #8B0000, #4B0000)"; // Light blue body bg
    shoutoutContainer.style.display = "none"; // Hide shoutout section
    quotegreeting.style.display = "none"; // Hide shoutout section
    quoteBtn.style.display = "none";
    cornerLink.style.display = "flex";
  }
}

quoteBtn.addEventListener("click", newQuote);

console.log("I am watching you.");
