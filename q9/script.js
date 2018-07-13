let numb1;
let numb2;

function assign()
{
    numb1=parseInt(document.querySelector("#numb1").value);
    numb2=parseInt(document.querySelector("#numb2").value);
    para=document.querySelector("p");
}

function addBtn()
{
    assign();
    para.innerHTML=numb1+numb2;
}

function diffBtn()
{
    assign();
    para.innerHTML=numb1-numb2;
}

function multiplyBtn()
{
    assign();
    para.innerHTML=numb1*numb2;
}

function divisionBtn()
{
    assign();
    para.innerHTML=numb1/numb2;
}

function remainderBtn()
{
    assign();
    para.innerHTML=numb1%numb2;
}
