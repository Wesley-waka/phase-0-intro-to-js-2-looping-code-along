
//  cards=[];
// const writeCards=["Guadalupe", "Ollie", "Aki"]
// function writeCards(cards,events) {
//     for (let i = 0; i < cards.length; i++) {
//         console.log(`Thank you, ${gifts[i]}, for the ${events} surprise gift!`);
      
//       }
//       return cards
// }
// writeCards(["Charlie", "Samip", "Ali"], "birthday");

// Code your solutions in this file
const names=["Guadalupe", "Ollie", "Aki"];
const messages=[];
writeCards=(names) => { 
  for (let i = 0; i < names.length; i=i+1) {
    console.log(messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)); 
    
  }
return messages;
}



function countDown(){
  let number = 10; 
  while (number>-1) {
    console.log(number);
    number=number-1;

    
  }
  
} 
