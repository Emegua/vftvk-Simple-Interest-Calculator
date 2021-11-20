function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    if (isNaN(principal) || principal=="" || principal<=0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    interest = parseInt(principal) * years * rate /100
    var year = new Date().getFullYear() + parseInt(years);

    //var result = document.getElementById("result");
    //var fpa = "If you deposit "+ "<span class='highlight'>" + principal+ "</span>" +",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
    //var pa = `If you deposit ${principal},\nat an interest rate of ${rate}%.\nYou will receive an amount of ${interest}\nin the year ${year}\n`;
    document.getElementById("r1").innerText= "\nIf you deposit ";
    document.getElementById("r2").innerText= principal;
    document.getElementById("r3").innerText= ",\n";
    document.getElementById("r4").innerText= "at an interest rate of ";
    document.getElementById("r5").innerText= `${rate}%`;
    document.getElementById("r6").innerText= ".\n";
    document.getElementById("r7").innerText= "You will receive an amount of ";
    document.getElementById("r8").innerText= interest;
    document.getElementById("r19").innerText= ",";
    document.getElementById("r9").innerText= "in the year ";
    document.getElementById("r10").innerText= `${year}\n\n`;
    return true;  
}

function updateRate ()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}