const prompt = require("prompt-sync")();
console.log(`
 Welcome to the Reimbursement Calculator, the instructions are below enjoy!
 In order for you to get the total reimbursement amount, you will have to enter some information regarding your projects.

 - You will need to enter the number amount of projects you are working on. 
 - You will be prompted to enter the type of city that the project or projects are in. 
   Example: 
   - City Type: Low Cost cities and High Cost cities.
 - Next you will have to enter the start date and end date of your project.
   Example: 
   - start date = Month/Day/Year  end date Month/Day/Year
 - From there you will have the ability to calculate the reimbursement for your projects. 

 ENJOY!!!
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


const reimbursement = () => {
    const numberOfProjects = prompt("Enter the number of project for this set: ");
    let projects = 0;
    while(parseInt(numberOfProjects) > projects) {
        console.log(`Project:${projects}`);
        console.log(projects);
        const startDate = prompt("Enter start date: ");
        const endDate = prompt("Enter end date: ");
        const typeOfCity = prompt("Enter the type of city you are in: ").toLowerCase();
    
        if (startDate[2] === endDate[2] && typeOfCity === lowCost) {
            if(!startDate[2] || !endDate[2]) {
              console.log('You did not enter the date correctly!!');
              continue
            }
            reimbursementCalculationValues.push(fullDay.reimbursementRateInLowCostCity);
            console.log(reimbursementCalculationValues);
        } else if (startDate[2] < endDate[2] && typeOfCity === highCost) {
            if(!startDate[2] || !endDate[2]) {
              console.log('You did not enter the date correctly!!');
              continue
            }
            reimbursementCalculationValues.push(fullDay.reimbursementRateInLowCostCity);

        }
        
        projects++
    }
}

reimbursement();