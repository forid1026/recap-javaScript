// chair = 3cft
// table = 10cft
// bed = 50cft

let chair, table, bed;
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    if(chairQuantity < 0 || tableQuantity < 0 || bedQuantity < 0){
        return 'Please input positive number which is 0 or greater than!!';
    }
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    //individual wood count
    const chairWoodQuantity = perChairWood * chairQuantity; 
    const tableWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;

    //total wood count
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity; 
    return totalWood;
}

const total = woodCalculator(0,1,1);
console.log(total, 'cft');