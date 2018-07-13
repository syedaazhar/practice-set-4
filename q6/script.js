let mathMarks = 20;
let englishMarks = 10;
let computerMarks = 50;




function showTotal()
{
    let math=parseInt(document.querySelector("#math").value);
    let english=parseInt(document.querySelector("#english").value);
    let computer=parseInt(document.querySelector("#computer").value);

    if(math > mathMarks && english > englishMarks && computer > computerMarks)
    {
        console.log("Passed");
    }
    else
    {
        console.log("fail")
    }
}