function throttle(fn, delay){
    let last = 0;
    return (...args)=>{
        const now = new Date().getTime();
        if (now-last < delay) {
            return;
        }
        last = now;
        return fn(...args);
    }
}


document.getElementById("my-btn").addEventListener("click", throttle((e)=> {
    console.log("You have clicked me");
},2500));