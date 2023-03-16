const valueLarge = 16;
const valueSmall = 13;

const largeWidth = 1600;
const smallWidth = 360;

const largeRatio = valueLarge / largeWidth;
const smallRatio = valueSmall / smallWidth;

const largeValue = largeRatio * 100;
const smallValue = smallRatio * 100;

const average = (largeValue + smallValue) / 2;

console.log('Large value: ', largeValue);
console.log('Small value: ', smallValue);
console.log('Average: ', average);