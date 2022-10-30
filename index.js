function scuberGreetingForFeet(someValue){
  // Write your code here!
  let result
  if (someValue<= 400) {
    result = 'This one is on me!'
  } else if (someValue>= 401, someValue<= 1999) {
    result = 'That will be twenty bucks.'
  } else if (someValue >= 2000, someValue<= 2500) {
    result = 'I will gladly take your thirty bucks.'
  } else if (someValue >= 2501) {
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(city){
  // Write your code here!
  let reply;
    city === "NYC" ? reply = 'Ok, sounds good.' : reply = 'No go.';
return reply
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default :
      return 'Bye.'
  }
}