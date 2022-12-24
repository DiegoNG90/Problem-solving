/* KATA 7
Paul is an excellent coder and sits high on the CW leaderboard. He solves kata like a banshee but would also like to lead a normal life, with other activities. But he just can't stop solving all the kata!!

Given an array (x) you need to calculate the Paul Misery Score. The values are worth the following points:

kata = 5
Petes kata = 10
life = 0
eating = 1
The Misery Score is the total points gained from the array. Once you have the total, return as follows:

< 40 = 'Super happy!'
< 70 >= 40 = 'Happy!'
< 100 >= 70 = 'Sad!'
> 100 = 'Miserable!'
*/

function paul(x){
    let score = 0;
    for(item of x){
        if(item === "kata") score += 5
        if(item === "Petes kata") score += 10
        if(item === "eating") score +=1
    }
    console.log(score);
    if(score < 40) return "Super Happy"
    if(score <70 && score >= 40) return "Hapy"
    if(score <100 && score >= 70) return "Sad!"
    if(score >= 100) return "Miserable!"
}

console.log((paul(['life', 'eating', 'life'])));
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']));
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']));
console.log(paul(["Petes kata","eating","eating","life","eating","Petes kata","life","kata","life","life","Petes kata","Petes kata","eating","life","kata","eating","eating","kata","kata","eating","life","kata","life","kata","life","Petes kata","life","kata","kata","Petes kata","life"]));


// ----------------Solucion codewars ------------------


// function paul(arr){
//     const dic = {kata: 5, 'Petes kata': 10, life: 0, eating: 1}
//     const num = arr.reduce( (a, i)=> +a + dic[i], 0)
//     return num < 40 ? 'Super happy!' : num < 70 ? 'Happy!' : num < 100 ? 'Sad!' : 'Miserable!'
// }