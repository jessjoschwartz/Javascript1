function fibonacci_set(max) {
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max) {
            fib_list.push(current_fib);
            current_fib = 
               fib_list[fib_list.length-1] +                         
               fib_list[fib_list.length-2];
        }
        return fib_list;
    }    
    else {
        return [1, 1];
    }
}

// Tell me if a number is even
function even(n) {
    return n % 2 === 0;
}

function sum(l) {
    var result = 0;
    for (var i = 0; i < l.length; i++) {
        result = result + l[i];
    }
    return result;
}

function filter(fn, l) {
    var out_list = [];
    for (var i = 0; i < l.length; i++) {
        var item = l[i];
        if (fn(item) === true) {
            out_list.push(item);
        }
    }
    return out_list;
}

console.log(sum(filter(even,fibonacci_set(4000000))));
