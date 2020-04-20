export const firePottery = (potteryObject, kilnTemp) => {
    //if kiln temperature is too high, the pottery will crack
    if (kilnTemp >= 2200) {
        potteryObject.cracked = true
    } else {
        potteryObject.cracked = false
    }
    console.log(potteryObject.cracked)

    potteryObject.fired = true

    return potteryObject
}