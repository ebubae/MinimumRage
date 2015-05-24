//var fs = require("fs")


function main()
{
    size = document.getElementById("fam");
    kids = document.getElementById("kids");
    age = document.getElementById("old");
    income = document.getElementById("income");
    size.onclick = function(){alert("hello");}
    var response = 
    {
        "size": size,
        "kids": kids,
        "age": age,
    };
    rage = work(response);
    /*console.log(rage);*/
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
}

$(document).ready(function () {
    console.log("ready");
    $('button').click(function () {
        console.log("hello");
    });
});
