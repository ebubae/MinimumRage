function main(e)
{
    var indices = {
        'FL': 99.48181818181818, 
        'KS': 92.02999999999999, 
        'MD': 124.95, 
        'WY': 98.75, 
        'IA': 93.7, 
        'CA': 132.7, 
        'VT': 120.5, 
        'OK': 90.12727272727273, 
        'MI': 93.76666666666667, 
        'CT': 130.26666666666665, 
        'OR': 110.55, 
        'RI': 123.3, 
        'TN': 89.52499999999999, 
        'NM': 98.95, 
        'AL': 92.78, 
        'MN': 100.69999999999999, 
        'NV': 101.5, 
        'SC': 98.22, 
        'AZ': 103.8142857142857, 
        'LA': 96.08749999999999, 
        'MA': 120.225, 
        'SD': 94.1, 
        'VA': 101.95454545454545, 
        'IL': 95.72500000000001, 
        'MS': 92.30000000000001, 
        'AR': 90.66666666666667, 
        'DE': 102.45, 
        'TX': 91.25483870967743, 
        'NE': 90.85, 
        'WA': 104.04444444444444, 
        'WI': 96.53750000000001, 
        'OH': 93.88181818181819, 
        'NC': 97.0875, 
        'MT': 100.06666666666666, 
        'ID': 93.10000000000001, 
        'GA': 92.14285714285714, 
        'NH': 116.8, 
        'PA': 100.62222222222222, 
        'UT': 95.19999999999999, 
        'NY': 126.34615384615384, 
        'AK': 132.75, 
        'MO': 90.75999999999999, 
        'ND': 97.6, 
        'KY': 89.26, 
        'ME': 116.5, 
        'CO': 100.70000000000002, 
        'IN': 92.9625, 
        'HI': 165.7, 
        'WV': 96.03999999999999, 
        'NJ': 128.6
    }
    
    var oldPoor = [[11354], [14309, 16256]];
    var youngPoor = [[12316], [15853, 16317], [18518, 19055, 19073], [24418, 24817, 24008, 24091], [29447, 29875, 28960, 28252, 27820], [33869, 34004, 33303, 32631, 31633, 31041], [38971, 39214, 38375, 37791, 36701, 35431, 34036], [43586, 43970, 43179, 42485, 41501, 40252, 38953, 38622], [52430 ,52685, 51984, 51396, 50430, 49101, 47899, 47601, 45768]]

    if(e.preventDefault)
    {
        e.preventDefault();
    }

    var size = document.getElementById("fam").value;
    var kids = document.getElementById("kids").value;
    var age = document.getElementById("old").value;
    var income = document.getElementById("income").value;

    var rage = 0;
    rage = age < 65 ? youngPoor[size-1][kids] : oldPoor[size-1][kids]

    var myStyles = {};
    for(var k = 0; k < 50; k++)
    {
        var hue = Math.floor( 60 + (rage*indices[Object.keys(indices)[k]] - income) * 120 / 1000);
        if(hue > 120)
        {
            hue = 120;
        }
        if(hue < 0)
        {
            hue = 0;
        }
        myStyles[Object.keys(indices)[k]] = {fill : "yellow"};
        console.log(hue);
    }
    $('#map').usmap({
        stateSpecificStyles: myStyles
    });
    return false;
}

$(document).ready(function()
{
    var form = document.getElementById("rageData");
    if (form.attachEvent)
    {
        form.attachEvent("submit", main);
    } 
    else 
    {
        form.addEventListener("submit", main);
    }
});
