var cat = {
    tiredness: 20,
    hunger: 20,
    loneliness: 3,
    happiness: 15,
    obedientness: -5000,
    feed: function(){
        console.log("Om nom nom");
        this.hunger = this.hunger - 5;
    },
    sleep: function(){
        console.log("That nap sure was refreshing");
        this.tiredness = this.tiredness - 5;
    },
    pet: function(){
        console.log("Purrrrrrrr");
        this.loneliness = this.loneliness - 5;
    },
    catnip: function(){
        console.log("I am high on catnip");
        this.happiness = this.happiness + 10;
    },
    kittyskool: function(){
        console.log("I learned good");
        this.obedientness = this.obedientness + 1;
    }
};

var keys = Object.keys(cat);
for (var i = 0; i < keys.length; i++){
    myvalue = cat[keys[i]];
    if (typeof(myvalue) !== 'function'){
        console.log(keys[i], myvalue);
    }
}

//console.log(cat.hunger);

// loop through all keys in object:
/*
    var keys = Object.keys(myObject);
    for (var i =0; i < keys.length; i++) {
        myvalue = myObject[keys[i]]];
    }
        
        */
        
// check if item in list
/*

    if (myList.indexOf(item) > -1) {
        <this means item is in myList>
        
    }
    */