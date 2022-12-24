const debounce = (fn, delay)=> {
    let timeOutID;
    return (...args)=> {
        if(timeOutID){
            clearTimeout(timeOutID);
        }
        timeOutID = setTimeout( () => {
            fn(...args)
        },delay)
    }
}


document.getElementById("my-btn").addEventListener("click", debounce(e=> {
    console.log("Clicked");
}, 2500));