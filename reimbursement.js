const prompt = require("prompt-sync")();
console.log(`
 Welcome to the Reimbursement Calculator, the instructions are below enjoy!
 In order for you to get the total reimbursement amount, you will have to enter some information regarding your projects.

 - You will need to enter the number amount of projects you are working on "USE NUMBERS". 
 - You will be prompted to enter the start date and end date of your project.
   Example: 
   - start date = Month/Day/Year 9/1/15  end date Month/Day/Year 9/2/15
 - Next you will have to enter the type of city that the project or projects are in.
   Example: 
   - City Type: "low cost" cities and "high cost" cities.
 - From there your reimbursement amount will be automatically calculated.

 Thanks for using the Reimbursement Calculator!
`);

const reimbursementCalculationValues = [];
const travelDay = {
  reimbursementRateInHighCostCity: 55,
  reimbursementRateInLowCostCity: 45,
}
const fullDay = {
  reimbursementRateInHighCostCity: 85,
  reimbursementRateInLowCostCity: 75,
}
let highCost = "high cost";
let lowCost = "low cost";


// Collection the 
const reimbursement = () => {
    const numberOfProjects = prompt("Enter the number of projects for this set: ");
    let projects = 1;
    while (parseInt(numberOfProjects) >= projects) {
        console.log(`Project:${projects}`);
        const startDate = prompt("Enter start date: ");
        const endDate = prompt("Enter end date: ");
        const typeOfCity = prompt("Enter the type of city you are in: ").toLowerCase();
    
         
        if (startDate[2] === '' || endDate[2] === '' || typeOfCity === '') {
          console.log('You did not enter the date correctly!!');
          continue
        } else if (startDate[2] === endDate[2] && typeOfCity === lowCost) {
          reimbursementCalculationValues.push(fullDay.reimbursementRateInLowCostCity);
        } else if (startDate[2] === endDate[2] && typeOfCity === highCost) {
          reimbursementCalculationValues.push(fullDay.reimbursementRateInHighCostCity);

        } else if (startDate[2] < endDate[2] && typeOfCity === lowCost) {
            let startDay = parseInt(startDate[2]);
            let endDay = parseInt(endDate[2]);
            if (startDay) {
              reimbursementCalculationValues.push(travelDay.reimbursementRateInLowCostCity)
            }
            if (endDay) {
              reimbursementCalculationValues.push(travelDay.reimbursementRateInLowCostCity)
            }
            while (endDay > startDay + 1) {
              let countedDays = startDay++;

              if (countedDays >= 1) {
                reimbursementCalculationValues.push(fullDay.reimbursementRateInLowCostCity);
              }
            }
        } else if (startDate[2] < endDate[2] && typeOfCity === highCost) {
          let startDay = parseInt(startDate[2]);
            let endDay = parseInt(endDate[2]);
            if (startDay) {
              reimbursementCalculationValues.push(travelDay.reimbursementRateInHighCostCity)
            }
            if (endDay) {
              reimbursementCalculationValues.push(travelDay.reimbursementRateInHighCostCity)
            }
            
            while (endDay > startDay + 1) {
              let countedDays = startDay++;

              if (countedDays >= 1) {
                reimbursementCalculationValues.push(fullDay.reimbursementRateInHighCostCity);
              }
            }
        }
        
        projects++
    }
    // Calculate the reimbursement Rates
    let total = 0;
    for (const element of reimbursementCalculationValues) {
      total+= element;
    }
    console.log(`Your total reimbursement amount is $${total}`);
}

reimbursement();




