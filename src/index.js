module.exports = function toReadable (number) {
  const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const arrDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  
  if (number < 20) {    // 2 3 4 5
    const word = arr[number];
    return word;
} else if (number >= 20 && number < 100 && (number.toString()[1]) < 1) {   //20 30 40 50
    const dozen = arrDozens[number.toString()[0]];
    return (dozen);
} else if (number >= 20 && number < 100) {     // 34 56 89
    const dozen = arrDozens[number.toString()[0]];
    const unit = arr[number.toString()[1]]; 
    return (dozen + ' ' + unit);
} else if ( (number > 99 && number.toString()[1]) < 1 && (number.toString()[2]) < 1) {   //100 200 300
    const hundred = arr[number.toString()[0]];
    return (hundred + ' hundred');
} else if ( number.toString()[1] == 1 && number.toString()[2] == 0) {
    const hundred = arr[number.toString()[0]];               // 110 210 310
    const hundredRest = arr[number.toString().slice(1)];
    return (hundred + ' ' + 'hundred' + ' ' + hundredRest);
} else if ( number > 99 && (number.toString()[1]) > 1 && (number.toString()[2]) >= 1) { //344 567 789
    const hundred = arr[number.toString()[0]];
    const dozen = arrDozens[number.toString()[1]];
    const unit = arr[number.toString()[2]];
    return (hundred + ' ' + 'hundred' + ' ' + dozen + ' ' + unit);
} else if ( number > 99 && (number.toString()[1]) < 1) {    // 506 304 202
    const hundred = arr[number.toString()[0]];
    const unit = arr[number.toString()[2]];
    return (hundred + ' ' + 'hundred' + ' ' + unit);
} else if ( number > 99 && (number.toString()[2]) < 1) {    // 560 350 770
    const hundred = arr[number.toString()[0]];
    const dozen = arrDozens[number.toString()[1]];
    return (hundred + ' ' + 'hundred' + ' ' + dozen);
} else if ( number > 99) {
    const hundred = arr[number.toString()[0]];               // 215 316 211
    const hundredRest = arr[number.toString().slice(1)];
    return (hundred + ' ' + 'hundred' + ' ' + hundredRest);
}    
};