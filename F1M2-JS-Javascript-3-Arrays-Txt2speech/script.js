    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');
    let naam = document.getElementById('naamchange');
    let myNaam = document.getElementById('naamgoed');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
        myImage.src = "https://www.ma-web.nl/static/vector/Logo_blok.svg";
        myText.innerHTML = "......";
    })

    myNaam.addEventListener('click', function(){
        /* hier komt jouw code */
        naam.innerHTML = "Kaan Secen";
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index1 = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index1];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      let index1 = randomizer(2);
      let index2 = randomizer(10);
      message.pitch = index1; // range between 0 and 2
      message.rate = index2; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["Mom", "Dad", "Son"];
    const werkwoord = ["writes", "walks", "listens"];
    const restwoord = ["fast", "at home", "a book."];
        
    let plaatjes = ["https://images.vexels.com/media/users/3/127677/isolated/preview/aeddafa9e7c028021c4398e0cf2f59e3-flat-headphone-icon-by-vexels.png",
     "https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-sound-audio-icon--line-style-vector-illustration-png-image_314747.jpg",
     "http://www.pngmart.com/files/3/Sound-Wave-PNG-HD.png", 
     "https://img.favpng.com/15/0/25/google-voice-computer-icons-microphone-sound-png-favpng-U23UhWriF92iUmchZLDMcL3Tp.jpg"]
    let arrayLength = onderwerp.length;
