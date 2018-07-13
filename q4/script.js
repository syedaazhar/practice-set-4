let mangoCost = 8;
let appleCost = 10;
let bananaCost = 15;




function showTotal()
{
    let mango=parseInt(document.querySelector("#mango").value);
    let apple=parseInt(document.querySelector("#apple").value);
    let banana=parseInt(document.querySelector("#banana").value);
    console.log(mango*mangoCost + apple*appleCost + banana*bananaCost);
}