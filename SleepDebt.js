function getSleepHours(day) {
    if (day === "Monday") {
      return 9;
    } else if (day === "Tuesday") {
      return 9;
    } else if (day === "Wednesday") {
      return 9;
    } else if (day === "Thursday") {
      return 8;
    } else if (day === "Friday") {
      return 9;
    } else if (day === "Saturday") {
      return 8;
    } else if (day === "Sunday") {
      return 9;
    } else {
      return "ERROR!";
    }
  }
  
  const getActualSleepHours = () =>
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
  
  console.log(getActualSleepHours());
  
  const getIdealSleepHours = () => (idealHours = 8 * 7);
  console.log(getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
    console.log("you got the perfect amount of sleep!");
  } else if (actualSleepHours < idealSleepHours) {
    console.log("you need to get some rest");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got more sleep than needed. You need " +
        (actualSleepHours -
        idealSleepHours) +
        " less of sleep."
    );
  } else {
    console.log("ERROR");
  }
  }
  calculateSleepDebt();