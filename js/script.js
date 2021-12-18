var timeleft = 11;
var timeout = 1000;
var downloadTimer = printCountdown(timeleft, timeout);
function printCountdown(timeleft, timeout) {
  timeout = timeout + 1000;
  if (timeleft <= 0) {
    setTimeout(() => {
      document.getElementById("countdown").innerHTML =
        "Happy Independence Day!!";
    }, timeout);
    return true;
  } else {
    setTimeout(() => {
      document.getElementById("countdown").innerHTML = timeleft;
    }, timeout);
    timeleft -= 1;
    printCountdown(timeleft, timeout);
  }
}