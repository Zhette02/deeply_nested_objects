let thoughts = []; //array for all the thoughts in other js file thoughts_content.js

let clickCounter = 0; //how many times the user clicks the mouse

class thought {
  //constructor for all thought objects
  constructor(conscious, verbal, category, belief, size, volume, content) {
    this.conscious = conscious;
    this.verbal = verbal;
    this.category = category;
    this.belief = belief;
    this.size = size;
    this.volume = volume;
    this.content = content;
    // this.positive = positive;
    // this.trigger = trigger;
  }
}

function belief(number) {
  let belief = [
    "Money is Power",
    "i am in the wrong by default",
    "the world is bad",
    "friends matter a lot",
  ];
  let conscious = Math.random();
  let verbal = Math.random();
  let category = Math.random();
  let size = Math.floor(Math.random() * 11); //it is represented by the size of the text. size of the thought corrasponds to how prominent this thought is in the thinkers mind.

  let volume = Math.floor(Math.random() * 6); //volume is not being used at this time

  if (number == 1) {
    belief = belief[0];

    ////each belief has a range of values within which thoughts are randomly created to reflect this belief on the minds environment
    ////this belief makes thoughts that have a 20% chance of being experienced in the conscious mind as seen below in the if else statement

    if (conscious > 0.8) {
      conscious = true; //conscious (conscious = true) thoughts are displayed with a yellow backgroud and rightside up text to represent them being the decipherable to the thinker
    } else {
      conscious = false;
    } //UNconscious thoughts (onscious = false) are displayed with white background and upside down text to represent that these thoughts are not decipherable to the thinker but are still present

    if (verbal > 0.2) {
      //verbal does not do anything yet. At this time all thoughts have content
      verbal = true;
    } else {
      verbal = false;
    }

    if (category > 0.5) {
      //the categories of thoughts show if they help the thinker exist (adaptive thoughts) or hurt them (maladaptive thoughts) the category corrasponds to the color of the text
      category = "productive"; // = adaptive = green
    } else if (category < 0.5 && category > 0.3) {
      category = "destructive"; // = maladaptive = red
    } else {
      category = "neutral"; // = no impact on wellness = white
    }

    let content =
      moneyIsPowerThoughts[
        Math.floor(Math.random() * moneyIsPowerThoughts.length)
      ]; //THIS IS THE TEXT DISPLAYED AS THE THOUGHTS (WRITTEN BY CHATGPT)

    thought1 = new thought(
      conscious,
      verbal,
      category,
      belief,
      size,
      volume,
      content
    ); //the thought being made

    return thought1; //the thought being spit out by the function
  }
  if (number == 2) {
    belief = belief[1];

    conscious = false;

    if (verbal > 0.97) {
      verbal = true;
    } else {
      verbal = false;
    }

    if (category > 0.97) {
      category = "productive";
    } else {
      category = "destructive";
    }

    let content =
      iAmWrongByDefaultThoughts[
        Math.floor(Math.random() * iAmWrongByDefaultThoughts.length)
      ];

    thought2 = new thought(
      conscious,
      verbal,
      category,
      belief,
      size,
      volume,
      content
    );

    return thought2;
  }

  if ((number = 3)) {
    belief = belief[2];

    if (conscious > 0.8) {
      conscious = true;
    } else {
      conscious = false;
    }

    if (verbal > 0.5) {
      verbal = true;
    } else {
      verbal = false;
    }

    if (category > 0.66) {
      category = "productive";
    } else if (category < 0.66 && category > 0.2) {
      category = "destructive";
    } else {
      category = "neutral";
    }

    let content =
      theWorldIsBadThoughts[
        Math.floor(Math.random() * theWorldIsBadThoughts.length)
      ];

    thought3 = new thought(
      conscious,
      verbal,
      category,
      belief,
      size,
      volume,
      content
    );

    return thought3;
  }

  if (number == 4) {
    belief = belief[3];
    if (conscious > 0.2) {
      conscious = true;
    } else {
      conscious = false;
    }

    if (verbal > 0.5) {
      verbal = true;
    } else {
      verbal = false;
    }

    if (category > 0.5) {
      category = "productive";
    } else if (category < 0.5 && category > 0.3) {
      category = "destructive";
    } else {
      category = "neutral";
    }

    let content =
      friendsMatterALotThoughts[
        Math.floor(Math.random() * friendsMatterALotThoughts.length)
      ];

    thought4 = new thought(
      conscious,
      verbal,
      category,
      belief,
      size,
      volume,
      content
    );

    return thought4;
  }
}

for (let i = 0; i < 400; i++) {
  let randomBelief = Math.random();

  if (randomBelief > 0.75) {
    thoughts.push(belief(1));
  } else if (randomBelief < 0.75 && randomBelief > 0.5) {
    thoughts.push(belief(2));
  } else if (randomBelief < 0.5 && randomBelief > 0.25) {
    thoughts.push(belief(3));
  } else {
    thoughts.push(belief(4));
  }
}

console.log(thoughts);
let body = document.body;
body.addEventListener("click", function displayThoughts() {
  let thoughtContainer = document.createElement("div");
  let thought = document.createTextNode(thoughts[clickCounter].content);
  let thoughtParent = document.getElementById("thoughtEnd");
  thoughtContainer.appendChild(thought);

  console.log(thoughts[clickCounter]);

  thoughtContainer.style.setProperty(
    "font-size",
    thoughts[clickCounter].size * 6 + "px"
  );

  if (thoughts[clickCounter].category == "productive") {
    thoughtContainer.style.setProperty("color", "green");
  } else if (thoughts[clickCounter].category == "destructive") {
    thoughtContainer.style.setProperty("color", "red");
  } else {
    thoughtContainer.style.setProperty("color", "white");
  }

  if (thoughts[clickCounter].belief == "Money is Power") {
    thoughtContainer.style.setProperty("border-color", "green");
  } else if (thoughts[clickCounter].belief == "i am in the wrong by default") {
    thoughtContainer.style.setProperty("border-color", "pink");
  } else if (thoughts[clickCounter].belief == "the world is bad") {
    thoughtContainer.style.setProperty("border-color", "grey");
  } else {
    thoughtContainer.style.setProperty("border-color", "blue");
  }

  if (thoughts[clickCounter].verbal == false) {
    thoughtContainer.style.setProperty("transform", "rotateX(180deg)");
    thoughtContainer.style.setProperty("background-color", "white");
  }
  document.body.insertBefore(thoughtContainer, thoughtParent.parentNode);

  clickCounter++;
});
console.log(body);


//something for later maybe
// check: function() {
//   if (verbal == true){
//     let content = "";
//     console.log(content);
//   }
// },

//     reference: function(belief)
