// liste von book urls
// random eine url aussuchen
// var Url = ["https://www.gutenberg.org/cache/epub/18668/pg18668-images.html", "https://www.gutenberg.org/cache/epub/1059/pg1059-images.html", "https://www.gutenberg.org/cache/epub/31547/pg31547-images.html", "https://www.gutenberg.org/cache/epub/34076/pg34076-images.html", "https://www.gutenberg.org/cache/epub/6341/pg6341.html"]
// const Url = ["pages/inSearchOfTheUnknown.html", "pages/theWorldSetFree.html", "pages/youth.html", "pages/foxTrapping.html", "pages/nachtstucke.html"];
// var randomNumber = Math.floor(Math.random() * Url.length)
// var randomFruit = Url[randomNumber]
// console.log(Url[Math.floor(Math.random() * Url.length)]);


// get iframes
// set book url as iframe url
// var frame1 = document.getElementById("frame1")
// iframe1.style.border = "1px solid red"

const Url = ["pages/inSearchOfTheUnknown.html", "pages/theWorldSetFree.html", "pages/youth.html", "pages/foxTrapping.html", "pages/nachtstucke.html", "pages/hypertext1.html", 
"pages/hypertext2.html", "pages/hypertext3.html", "pages/hypertext4.html", "pages/hypertext5.html", "pages/hypertext6.html", "pages/hypertext7.html", "pages/hypertext8.html", 
"pages/hypertext9.html", "pages/hypertext10.html", "pages/hypertext11.html", "pages/hypertext12.html", "pages/hypertext13.html", "pages/hypertext14.html", "pages/hypertext15.html", 
"pages/hypertext16.html", "pages/hypertext17.html", "pages/hypertext18.html", "pages/hypertext19.html", "pages/hypertext20.html", "pages/hypertext21.html", "pages/hypertext22.html", 
"pages/hypertext23.html", "pages/hypertext24.html", "pages/hypertext25.html", "pages/hypertext26.html", "pages/hypertext27.html", "pages/hypertext28.html", "pages/hypertext29.html", 
"pages/hypertext30.html", "pages/hypertext31.html", "pages/hypertext32.html", "pages/hypertext33.html", "pages/hypertext34.html", "pages/hypertext35.html", "pages/hypertext36.html", 
"pages/hypertext37.html", "pages/hypertext38.html", "pages/hypertext39.html", "pages/hypertext40.html", "pages/hypertext41.html", "pages/hypertext42.html", "pages/hypertext43.html", 
"pages/hypertext44.html", "pages/hypertext45.html"];

let randomList = [];
let i =0;

while (i < 50){
    const num = Math.floor(Math.random()*50);

    if((randomList.filter(f  => f=== num)).length < 1){
        const frame = document.getElementById("iframe"+(i+1));
        frame.src = Url[num];
        randomList.push(num);
        i++;
    }
}
