let mind = {

  coreBeliefs: {

    belief1: {
      name: "money is power",
      

    },

    belief2: {
      name: "i am in the wrong by default"

    },

    belief3: {
      name: "the world is bad"

    },

    belief4: {
      name: "friends matter a lot"

    }

  },

  thought: {
    conscious: Boolean,
    verbal: Boolean,
    positive: Boolean, 
    catagory: "string",

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

