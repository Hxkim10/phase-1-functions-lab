///1 ///
const hq = 42;
const pickupLocation = 50;

function distanceFromHqInBlocks(p_pickupLocation) {
  const the_number_of_blocks_ = Math.abs(p_pickupLocation - hq);
  return the_number_of_blocks_;
}

/// 2 ///
function distanceFromHqInFeet(p_pickupLocation) {
  const distanceInFeet = Math.abs(p_pickupLocation - hq) * 264;
  return distanceInFeet;
}

/// 3 ///
function distanceTravelledInFeet(start_block, end_block) {
  const distanceInFeet = Math.abs(start_block - end_block) * 264;
  return distanceInFeet;
}

/// 4 ///

/*The first four
  hundred feet are free. For a distance between 400 and 2000 feet, the price is
  2 cents per foot (not including 400, which are free!). Then Scuber charges a
  flat fare of $25 for a distance over 2000 feet and under 2500 feet.
  Finally, Scuber does not allow any rides over 2500 feet — the function returns
  `'cannot travel that far'` if a ride over 2500 feet is requested.*/
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
