function sleep (seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds*1000) {}
    return 0;
}

// Always slow things by a little, but not
// enough that you disable the extension
sleep(1);

var d = new Date();
var currHour = d.getHours();
var startHour = 20; // Get slower starting at 8pm
var stopHour = 8;   // Turn off at 8am

// Get slower when it is late
if ((currHour >= startHour) || (currHour < stopHour)) {

  var slowFactor = 0;
  if (currHour >= startHour) {
    // We are before midnight which is 20 to 23
    slowFactor = currHour - startHour + 1;
  } else {
    // We are at or after midnight which is 0 to 8
    slowFactor = 5 + currHour;
  }

  // By midnight sleep for 10 extra seconds
  var sleep_time = 2 * slowFactor;
  console.log('sleeping for ' + sleep_time + ' seconds.');
  sleep(sleep_time);
}
