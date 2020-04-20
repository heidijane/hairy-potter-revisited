// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 1, 2)
let bowl = makePottery("bowl", 2, 3)
let plate = makePottery("plate", 1, 2)
let vase = makePottery("vase", 4, 3)
let planter = makePottery("planter", 5, 5)


// Fire each piece of pottery in the kiln
firePottery(mug, 2200)
firePottery(bowl, 2000)
firePottery(plate, 3000)
firePottery(vase, 2100)
firePottery(planter, 2100)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(bowl)
toSellOrNotToSell(plate)
toSellOrNotToSell(vase)
toSellOrNotToSell(planter)

// Invoke the component function that renders the HTML list
PotteryList()