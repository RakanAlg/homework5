class Dice {
   constructor (sidesPara = 6) {
        this.sides =sidesPara
   }

 roll() {
    const random =Math.random() // a number (0,1)
    const intNumber = this.sides * random // a number (0,6) 
    const result = math.floor(intNumber) +1 // 1-6
    return result
 }

}

const d1= new Dice()
d1.roll()

const d2= new Dice()
d2.roll()
