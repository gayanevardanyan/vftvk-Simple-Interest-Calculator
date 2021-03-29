function checkdata(){
    //Create references to the input elements we wish to validate
    var principal = document.getElementById("principal");

    //Check if principal field is empty
    if(principal.value == "" || principal.value<=0){
          alert("Enter a positive number");
          principal.focus();
          return false;
    }
   //If all is well return true.
    return true;
}

function readRange(interest){
    document.getElementById("interestSelected").innerHTML = interest.value +" %";
}

function add_years(dt,n) 
 {
 return new Date(dt.setFullYear(dt.getFullYear() + n));      
 }

function actualYear(years){
dt = new Date();
return add_years(dt, years).getFullYear();
}
function compute()
{
    if(checkdata()){
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = parseInt(document.getElementById("years").value);
    
        var interest = principal * years * rate / 100;
        //var interestValue = document.getElementById("interest").value;
        readRange(document.getElementById("interest"));
    
        document.getElementById("result").innerHTML = "If you deposit <strong>" +principal+"</strong>,<br />"+
        "at an interest rate of <strong>"+rate+" %</strong>.<br />"+
        "You will receive an amount of <strong>"+interest+"</strong>,<br />"+
        "in the year <strong>"+actualYear(years)+"</strong>";
    }

}


        