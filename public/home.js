const quotes = ["There was a Monty Python sketch that showed Thomas Hardy writing in front of a live audience and when he finish a sentence they all cheer Then hed cross out a sentence and theyd all boo or sigh That about as exciting a life as it is for a writer You write sentences and you cross out sentences", "The argument is sometimes advanced What difference does the length of the sentence make so long as it is clear But clarity is not the sole criterion; the important thing is ease of comprehension. And small blocks of meaning are more easily comprehended than large ones. After all, a quart of gin is perfectly clear, but you wouldn't try to drink it all in one draught", "There are no absolute rules of good writing generalizations are instantly riddled with exceptions but the principle of the word average sentence comes closest. No other single step you can take will show such quick results in clarity and vigor", "Times readers are sophisticated and dont expect ‘Run, Spot, run’ syntax. But news is read in a hurry, and we should strive for clear, sharp prose that aids rapid comprehension. Long, complex sentences slow readers down and can lead our syntax astray", "Theres no formula to determine when a sentence is overloaded or threatening to run off the rails. But there are warning signs. Sentences of 40, 50 or 60 words are awfully hard to make readable. When you get up to four or five commas, think again. A half-dozen verbs usually mean trouble. And when a reader’s mind has to move back and forth and back again, all before hitting a period, its time to take another look", "We’re not writing for third graders. But we are writing for harried readers who value sharp, lucid prose. The more stuffed the sentence, the harder it is to unpack the thoughts and the greater the danger of grammatical problems", "Maximum sentence length: seventeen words. Minimum: one. No semicolons. Semicolons indicate relationships that only idiots need defined by punctuation. Besides, they are ugly. Make sure each sentence is at least four words longer or shorter than the one before it"]
function getRandomQuotes(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}
getRandomQuotes();
function numberofwords(str,n){
    // console.log(str.split(/\s+/));
    return str.split(/\s+/).slice(0,n).join(" ");
}
const text_img = document.getElementsByClassName("fa fa-font");
const time_img = document.getElementsByClassName("fa fa-clock-o");
const span1=document.getElementById("span1");
const span2=document.getElementById("span2");
const time=document.getElementsByClassName("time");
const content=document.getElementById("content");
const text=getRandomQuotes();
var user_Input=document.getElementById("user_input");
content.textContent=numberofwords(text,span1.innerHTML);

function comparison(text){
    const n=text.length;
    var i=0;
    user_Input.addEventListener('input',(e)=>{
            // console.log(e.data);
        if(e.data===null){
            if(i!=0){
                i--;
            }
        }
        else if(e.data==text[i++]){
            user_Input.style.color="green";
        }


    })
        
        
}
    var text_Area;
    time[1].addEventListener('click',()=>{
        span1.innerHTML='10';
        span2.innerHTML='25';
        const text=getRandomQuotes();
        content.textContent=numberofwords(text,span1.innerHTML);
        span1.style.color = "red";
        span2.style.color = "black";
        time[1].style.color = "red";
        time[0].style.color = "black";
        text_img.style.color="red";
        
    })
    span2.addEventListener('click',()=>{
        const text=getRandomQuotes();
    content.textContent=numberofwords(text,span2.innerHTML);
    span2.style.color="red";
    span1.style.color="black";  
})
span1.addEventListener('click',()=>{
    const text=getRandomQuotes();
    content.textContent=numberofwords(text,span1.innerHTML);
    span1.style.color="red";
    span2.style.color="black";
})
time[0].addEventListener('click',()=>{
    span1.innerHTML='15';
    span2.innerHTML='30';
    const text = getRandomQuotes();
    text_Area= numberofwords(text, span1.innerHTML);
    content.textContent=text_Area;
    comparison(text_Area)
    time[0].style.color="red";
    time[1].style.color="black";
    span1.style.color = "red";
    span2.style.color = "black";
})
// function textMeasurement(text,time_interval){
    //     user_Input.addEventListener('input',)
    // }

    
    
    
    
    
    