// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let mCounter = 0; mCounter < musicians.length; mCounter++) {
    for (let iCounter = 0; iCounter < instruments.length; iCounter++) {
    let string = musicians[mCounter] + " plays " + instruments[iCounter];
    array.push(${string});
  }
  }
}


// function johnLennonFacts = facts