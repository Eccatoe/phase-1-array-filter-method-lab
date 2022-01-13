const findMatching=(driverArray, enteredName)=>{
    return (driverArray.filter(driverName=>driverName.toLowerCase()===enteredName.toLowerCase()))
}

const fuzzyMatch=(driverArray, enteredLetters)=>{
    let endNum = enteredLetters.length

    return (driverArray.filter(driverName=> {
        return driverName.slice(0, endNum).toLowerCase() === enteredLetters.toLowerCase()
    }))
}

// const matchName=(driverArray, enteredName)=>{
//     let x=driverArray.indexOf(enteredName)
//     let obj=driverArray[x]
//     return (driverArray.filter(obj=>obj===driverArray.indexOf(enteredName)))
//     // driverArray.indexOf(enteredName)
//     }   

// // matchName(drivers, "Bobby")
// // return driveryArray[x] that is at the //name
// // x=indexOf(enteredName)

const matchName=(driverArray, string)=>{
    let match=driverArray.filter((obj)=>obj.name===string)
    if (match) {return match}
}