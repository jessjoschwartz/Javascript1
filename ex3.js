words = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

function find_duplicates(words) {
    var things_seen = [];
    var duplicates = [];
    for (i = 0; i < words.length; i++){
        var item = words[i];
        
        // if item not in list, push item to things_seen
        if (things_seen.indexOf(item) === -1){
            things_seen.push(item);
        }
        else
        {
            // check to see if there's a duplicate
            if (duplicates.indexOf(item) === -1){
                duplicates.push(item);
            }
        }
    }
    return duplicates;
}

console.log(find_duplicates(words));