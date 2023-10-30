//array for all the thoughts
let thoughts = [];
let clickCounter = 0;



class thought {
  constructor(conscious, verbal, category, belief, size, volume, content){
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

function belief1() {
  let belief = "Money is Power";

  let conscious = Math.random();
  if(conscious > 0.8) {
    conscious = true
  } else {conscious = false}

  let verbal = Math.random();
  if (verbal > 0.2) {
    verbal = true
  }else{verbal = false}

  let category = Math.random();
  if (category > 0.5) {
    category = "productive"
  } else if (category < 0.5 && category > 0.3) {
    category = "destructive"
  } else {
    category = "neutral"
  }
  
  let size = Math.floor(Math.random() * 11);
  let volume = Math.floor(Math.random() * 6);
  
  let content = moneyIsPowerThoughts[Math.floor(Math.random() * moneyIsPowerThoughts.length)];

  thought1 = new thought(conscious, verbal, category, belief, size, volume, content);
  
  return thought1;

}

function belief2() {
  let belief = "i am in the wrong by default";

  let conscious = false;

  let verbal = Math.random();
  if (verbal > 0.97) {
    verbal = true
  }else{verbal = false}


  let category = Math.random();
  if (category > 0.97) {
    category = "productive"
  } else {
    category = "destructive"
  }
  
  let size = Math.floor(Math.random() * 11);
  let volume = Math.floor(Math.random() * 4);
  
  let content = iAmWrongByDefaultThoughts[Math.floor(Math.random() * iAmWrongByDefaultThoughts.length)];


  thought2 = new thought(conscious, verbal, category, belief, size, volume, content);
  
  return thought2;

}

function belief3() {
  let belief = "the world is bad";

  let conscious = Math.random();
  if(conscious > 0.8) {
    conscious = true
  } else {conscious = false}

  let verbal = Math.random();
  if (verbal > 0.5) {
    verbal = true
  }else{verbal = false}

  let category = Math.random();
  if (category > 0.66) {
    category = "productive"
  } else if (category < 0.66 && category > 0.2) {
    category = "destructive"
  } else {
    category = "neutral"
  }
  
  let size = Math.floor(Math.random() * 11);
  let volume = Math.floor(Math.random() * 11);
  
  let content = theWorldIsBadThoughts[Math.floor(Math.random() * theWorldIsBadThoughts.length)];


  thought3 = new thought(conscious, verbal, category, belief, size, volume, content);
  
  return thought3;

}

function belief4() {
  let belief = "friends matter a lot";

  let conscious = Math.random();
  if(conscious > 0.2) {
    conscious = true
  } else {conscious = false}

  let verbal = Math.random();
  if (verbal > 0.5) {
    verbal = true
  }else{verbal = false}


  let category = Math.random();
  if (category > 0.5) {
    category = "productive"
  } else if (category < 0.5 && category > 0.3) {
    category = "destructive"
  } else {
    category = "neutral"
  }
  
  let size = Math.floor(Math.random() * 6);
  let volume = Math.floor(Math.random() * 11);
  
  let content = friendsMatterALotThoughts[Math.floor(Math.random() * friendsMatterALotThoughts.length)];


  thought4 = new thought(conscious, verbal, category, belief, size, volume, content);
  
  return thought4;

}



  for (let i = 0; i < 400; i++) {
    let randomBelief = Math.random();

    if (randomBelief > 0.75) {
      thoughts.push(belief1())
    } else if (randomBelief < 0.75 && randomBelief > 0.5) {
      thoughts.push(belief2())
    } else if (randomBelief < 0.5 && randomBelief > 0.25) {
      thoughts.push(belief3())
    } else {
      thoughts.push(belief4())
    }

  }




console.log(thoughts);
let body = document.body;
body.addEventListener('click', function displayThoughts(){  
  let thoughtContainer = document.createElement('div')
  let thought = document.createTextNode(thoughts[clickCounter].content)
  let thoughtParent = document.getElementById('thoughtEnd')
  thoughtContainer.appendChild(thought);
  
  console.log(thoughts[clickCounter]);
  
thoughtContainer.style.setProperty('font-size', thoughts[clickCounter].size * 6 + "px");


if (thoughts[clickCounter].category == "productive") {
thoughtContainer.style.setProperty('color', "green");

}else if(thoughts[clickCounter].category == "destructive"){
  thoughtContainer.style.setProperty('color', "red");

}else{
  thoughtContainer.style.setProperty('color', "white");
}

if (thoughts[clickCounter].belief == "Money is Power"){
  thoughtContainer.style.setProperty("border-color", "green")
}else if(thoughts[clickCounter].belief == "i am in the wrong by default"){
  thoughtContainer.style.setProperty("border-color", "pink")
}else if(thoughts[clickCounter].belief == "the world is bad"){
  thoughtContainer.style.setProperty("border-color", "grey")
}else{
  thoughtContainer.style.setProperty("border-color", "blue")
}

if (thoughts[clickCounter].verbal == false){
  thoughtContainer.style.setProperty("transform", "rotateX(180deg)")
  thoughtContainer.style.setProperty("background-color", "white")
}
// thoughtContainer.style.setProperty('font-size', thoughts[clickCounter].size * 6 + "px");
// thoughtContainer.style.setProperty('font-size', thoughts[clickCounter].size * 6 + "px");
// thoughtContainer.style.setProperty('font-size', thoughts[clickCounter].size * 6 + "px");
// thoughtContainer.style.setProperty('font-size', thoughts[clickCounter].size * 6 + "px");


  document.body.insertBefore(thoughtContainer, thoughtParent.parentNode)

  clickCounter++

});
console.log(body)





// const titleThought = document.getElementsByClassName('thought');






let mind = {

  coreBeliefs: {

    belief1: {
      name: "money is power",
      //positive 60% of the time NOT positive 40% of the time
      conscious: true,
      //verbal 40% NONverbal 60%
      //category productive 50% destuctive 20% neutral 30%
      //size is a random number between 1-10
      //volume is a random number between 1-5
    },

    belief2: {
      name: "i am in the wrong by default",
      //positive 5% of the time NOT positive 95% of the time
      conscious: false,
      //verbal 3% NONverbal 97%
      //category productive 3% destuctive 97% neutral 0%
      //size is a random number between 1-10
      //volume is a random number between 1-3

    },

    belief3: {
      name: "the world is bad",
      //positive 0% of the time NOT positive 100% of the time
      conscious: true,
      //verbal 50% NONverbal 50%
      //category productive 30% destuctive 50% neutral 20%
      //size is a random number between 1-10
      //volume is a random number between 1-10
      

    },

    belief4: {
      name: "friends matter a lot",
      //positive 80% of the time NOT positive 20% of the time
      conscious: false,
      //verbal 50% NONverbal 50%
      //category productive 50% destuctive 50% neutral 0%
      //size is a random number between 1-5
      //volume is a random number between 1-10
    }

  },
  


    // check: function() { 
    //   if (verbal == true){
    //     let content = "";
    //     console.log(content);
    //   }
    // },

//     reference: function(belief){
    

//       console.log(belief)
//       if (belief == mind.coreBeliefs.belief1){
//         content = mind.coreBeliefs.belief1.name;
//         console.log(content)
//       }
//     }


    
//   }
  
 }


//console.log(mind.thought.reference(mind.coreBeliefs.belief1))
// mind.thought.reference(mind.core);

// console.log(mind.coreBeliefs.belief1.name)

// console.log(mind.thought.reference(mind.coreBeliefs.belief1))



