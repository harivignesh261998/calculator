function calc(){
    
    var balance=document.getElementById("inital-balance").value;
    var bal=+balance
    var intrest=document.getElementById("intrest").value;
    var term=document.getElementById("term").value;
    var cf=document.getElementById("Compounding-frequency").value
    console.log(cf)
    let intrest_cal=[];
    let totalIntrest=0;
    for(let i=0;i<term;i++){
       balance=+balance
       intrest=+intrest
       let x=(balance*intrest)/100;
       totalIntrest=x+totalIntrest
       balance=x+balance
       intrest_cal.push([
        {"Year":i+1},
        {"Principal":bal},
        {"Yearly_Intrest":x},
        {"Total_Intrest":totalIntrest},
        {"Total_Balance":balance}
       ]
           )
    }
    intrest_cal.unshift([
        {"Year":0},
        {"Principal":bal},
        {"Yearly_Intrest":0},
        {"Total_Intrest":0},
        {"Total_Balance":bal}
    ])

    console.log(intrest_cal[intrest_cal.length-1][4].Total_Balance)

    document.getElementById("final_balance").innerHTML=Math.ceil(intrest_cal[intrest_cal.length-1][4].Total_Balance);
    document.getElementById("compond_intrest").innerHTML=Math.ceil(intrest_cal[intrest_cal.length-1][3].Total_Intrest)
    document.getElementById('result').style.display = "block";
    createTable(intrest_cal)
}

function createTable(data){
  
    var table=document.getElementById("mytable");
    for(let i=0;i<data.length;i++){
        console.log(data)
        var row=`<tr>
                    <td>${(data[i][0].Year)}</td>
                    <td>${data[i][1].Principal}</td>
                    <td>${(data[i][2].Yearly_Intrest).toFixed(2)}</td>
                    <td>${(data[i][3].Total_Intrest).toFixed(2)}</td>
                    <td>${(data[i][4].Total_Balance).toFixed(2)}</td>
                </tr>
        `
        table.innerHTML+=row
    }
    document.getElementById('resultant_table').style.display = "block";
  

}