

// tell user about vault
// create constant variables for given numbers
// create a variable that uses constants and arithmatic to create new value
//    - do this three times
// display to user the combination of the three variables ( non constants )

alert(`You have received this message because you have been chosen to open an important vault. 
Here is the secret combination:`);

const numb1 = 10;
const numb2 = 40;
const numb3 = 39;

lockNumb1 = numb1 + numb2 + numb3;
lockNumb2 = numb3 - numb1 - numb2;
lockNumb3 =  numb3 * (numb2 / numb1);

alert(`${lockNumb1}, ${lockNumb2}, ${lockNumb3} `);