/*
    Pottery Factory
    Functions that create a piece of pottery, fire it, and then determine if it can be sold
    
    Author: Heidi
*/

//generator function to create an ID
function* autoIncrement() {
    var index = 1
    while (true)
        yield index++
}

//assign the generator function to a variable
let potteryId = autoIncrement()

export const makePottery = (shape, weight, height) => {

    return {
        "shape": shape,
        "weight": weight,
        "height": height,
        "id": potteryId.next().value
    }
}