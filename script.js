let mind = {

  coreBeliefs: {

    belief1: {
      name: "money is power",
      //positive 60% of the time NOT positive 40% of the time
      conscious: true,
      //verbal 40% NONverbal 60%
      //catagory productive 50% destuctive 20% neutral 30%
      //size is a random number between 1-10
      //volume is a random number between 1-5
    },

    belief2: {
      name: "i am in the wrong by default",
      //positive 5% of the time NOT positive 95% of the time
      conscious: false,
      //verbal 3% NONverbal 97%
      //catagory productive 3% destuctive 97% neutral 0%
      //size is a random number between 1-10
      //volume is a random number between 1-3

    },

    belief3: {
      name: "the world is bad",
      //positive 0% of the time NOT positive 100% of the time
      conscious: true,
      //verbal 50% NONverbal 50%
      //catagory productive 30% destuctive 50% neutral 20%
      //size is a random number between 1-10
      //volume is a random number between 1-10
      

    },

    belief4: {
      name: "friends matter a lot",
      //positive 80% of the time NOT positive 20% of the time
      conscious: false,
      //verbal 50% NONverbal 50%
      //catagory productive 50% destuctive 50% neutral 0%
      //size is a random number between 1-5
      //volume is a random number between 1-10
    }

  },

  thought: {
    conscious: Boolean,
    verbal: Boolean,
    positive: Boolean, 
    catagory: "string",
    belief: "string",
    size: Number,
    volume: Number,
    trigger: "string",


    // check: function() { 
    //   if (verbal == true){
    //     let content = "";
    //     console.log(content);
    //   }
    // },

    reference: function(belief){
    

      console.log(belief)
      if (belief == mind.coreBeliefs.belief1){
        content = mind.coreBeliefs.belief1.name;
        console.log(content)
      }
    }


    
  }
  
}


//console.log(mind.thought.reference(mind.coreBeliefs.belief1))
// mind.thought.reference(mind.core);

// console.log(mind.coreBeliefs.belief1.name)

// console.log(mind.thought.reference(mind.coreBeliefs.belief1))

