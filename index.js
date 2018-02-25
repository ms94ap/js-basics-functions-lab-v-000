// Code your solution in this file!
 function distanceFromHqInBlocks(blockNum) {
  if (blockNum > 42) {
    return blockNum - 42
  } else {
    return 42 - blockNum
  }
 }

function distanceFromHqInFeet(blockNum) {
  return distanceFromHqInBlocks(blockNum) * 264
}

function distanceTravelledInFeet (start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}
