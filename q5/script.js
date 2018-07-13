let studentMarks;
let totalMarks=1050;

function showResult()
{
    studentMarks=parseInt(document.querySelector("input").value);
   
    console.log((studentMarks/totalMarks)*100);
}