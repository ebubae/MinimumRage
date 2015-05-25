function main(e)
{
    if(e.preventDefault)
    {
        e.preventDefault();
    }
    size = document.getElementById("fam").value;
    kids = document.getElementById("kids").value;
    age = document.getElementById("old").value;
    income = document.getElementById("income").value;
    var response = 
    {
        "size": size,
        "kids": kids,
        "age": age,
    };
    $.ajax({
        type: "POST",
        url: "call.py",
        data: response
    }).done(function(o){
    });
    for(var k = 0; k < rage.length; k++)
    {
        var hue = Math.floor( (60 + rage[Object.keys(rage)[k]] - income) * 120 / 100)
        if(hue > 120)
        {
            hue = 120
        }
        if(hue < 0)
        {
            hue = 0
        }
        $('#map').usmap(
        {
            stateSpecificStyles:
            {
                //Object.keys(rage)[k] : {fill: "hsl("+ hue +", " + .5 + ", " + .5 + ")"}
            }
        });
    }
    return false;
}

$(document).ready(function()
{
    var form = document.getElementById("rageData");
    console.log(form);
    if (form.attachEvent)
    {
        form.attachEvent("submit", main);
    } 
    else 
    {
        form.addEventListener("submit", main);
    }
});
