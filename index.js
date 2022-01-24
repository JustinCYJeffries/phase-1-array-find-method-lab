// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
function superbowlWin(array)  {
    const championship = array.find(array => array.result === "W");
    if (championship) {
        return championship.year
    }
    else{
        return undefined
    }
}