let count = 0;

function increment() {
    count = count + 1;
    document.getElementById( "count" ).innerHTML = count;
}

function decrement(){
    if (count == 0) {
        alert("You can't count negative ﹗")
    }else{
        count = count -1;
        document.getElementById("count").innerHTML = count;
    }
}

function reset(){
    count = 0;
    document.getElementById("count").innerHTML = count;
    alert("Reset done ✅")
}