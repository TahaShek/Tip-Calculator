// yaha par mae sara variables declare kr rha hoo
let billInput=document.querySelector('#billTotalInput') 
let tipInput=document.querySelector('#tipInput')
let numberOfPeopleDiv=document.querySelector('#numberOfPeople')
let perPersonTotalDiv=document.querySelector('#perPersonTotal')


// number of people wala div sae jo number of people ha wo aik varaible mae store kro 
let numberPeople=parseInt(numberOfPeopleDiv.innerHTML)


// Calculate bill per person 

let calculateBill=()=>{
    // user sei bill type karao
     let bill=parseInt(billInput.value)

    //  get tip from the user 
    let tip=parseInt(tipInput.value)/100
    
    // tip ki total amount 
    let tipAmount =bill*tip
    
    // total bill plus tip 
    let total=tipAmount+bill;

    // bill divded by per person 
    let perPersonTotal=total/numberPeople;

// bill per person divide and show to Dom
perPersonTotalDiv.innerHTML=`${perPersonTotal.toFixed(2)}`    
}


// ye wala function logo main bill divide kre ga ?


let increasePeople=()=>{

// increasePeople 
numberPeople +=1

// plus ka sign kam kra rha ha 
numberOfPeopleDiv.innerHTML=numberPeople


}