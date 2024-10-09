// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll']

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    debugger
}

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
      debugger;
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);

  function writeCards(names, event) {
    const messageArray = []
    for (let i = 0; i < names.length; i++) {
        let newMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messageArray.push(newMessage)
      debugger;
    }
  
    return messageArray;
  }
  
  const names = ['Jessie', 'Kevin']
  const event = 'birthday'

  writeCards(names, event)

  function countDown() {
    let i = 10
    while (i >= 0) {
        i--
        console.log(i)
        debugger
    }
  }
  
//   const names = ['Jessie', 'Kevin']
//   const event = 'birthday'

  writeCards(names, event)