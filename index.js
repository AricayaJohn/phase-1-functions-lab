// Code your solution in this file!

//this is to find how many distance in blocks away from HQ the pickup location
function distanceFromHqInBlocks (blocks) {
    if (blocks < 42) {
    return (42 - blocks);
    }
    else {
         return (blocks - 42);
        }
}
// converting blocks into feet
function distanceFromHqInFeet (blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

//1 block is 264 feet 
//calculate distance traveled in feet
function distanceTravelledInFeet (start, destination) {
    if(destination > start) {
        return ((destination - start) * 264);
    }  
    else  {
        return ((start - destination) * 264);
    }
}

function calculatesFarePrice (start, destination) {
const distance = distanceTravelledInFeet (start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance <= 2500)
        return 25;
    else {
        return 'cannot travel that far';
    }
}