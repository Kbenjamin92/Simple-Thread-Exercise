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

const reimbursement = () => {
  const reimbursementCalculationValues = [];
  const travelDay = {
    reimbursementRateInHighCostCity: 55,
    reimbursementRateInLowCostCity: 45,
  };
  const fullDay = {
    reimbursementRateInHighCostCity: 85,
    reimbursementRateInLowCostCity: 75,
  };
  let cityType1 = "high cost";
  let cityType2 = "low cost";

  const numberOfProjects = prompt("Enter the number of project for this set: ");
  if (numberOfProjects > 0) {
    console.log(`Project ${numberOfProjects}`);
    const startDate = prompt("Enter start date: ");
    const endDate = prompt("Enter end date: ");

    const typeOfCity = prompt("Enter the type of city you are in: ");
    if (typeOfCity.toLowerCase() === cityType1) {
    }
  }
};
