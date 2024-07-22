const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = 0;

const batteries = [
  { assembled: true, count: 10 },
  { assembled: true, count: 10 },
  { assembled: true, count: 11 },
];

const reducer = () => {
  totalBatteries = batteries.reduce((acc, battery) => {
    if (battery.assembled) {
      return acc + battery.count;
    }
    return acc;
  }, 0);
  return totalBatteries;
};

reducer(); // Call the reducer function to calculate totalBatteries
