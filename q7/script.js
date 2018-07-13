let speed=60;

function checkSpeed()
{
    let userSpeed=parseInt(document.querySelector("input").value);

    if(userSpeed > speed)
    {
        console.log("OverSpeeding");
    }
    else
    {
        console.log("not");
    }
}