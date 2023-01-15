function validateCard(cardNum, cardType) {
  //remove all space and non-digit charcters from the card number
  //since credit cards are strictly numbers only
  cardNum = cardNum.replace(/\D/g, "");


  // Define regular expressions for each card type
  let regexes = {
    //Visa cards are usually 13 or 16 digits long
    //starts with 4.
    // If the cards have 13 digits the next twelve digits would be any number between 0-9.
    // If the cards have 16 digits the next fifteen digits would be any number between 0-9.
    Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,

    //Mastercards are usually 16 digits long.
    //starts two digits numbers ranging from 51 to 55 or four digits numbers rangin from 2221 to 2720.
    // if the range is 51 to 55, the remaining fourteen digits should be any number between 0-9.
    //but if the range is 2221 to 2720, the remaining twelve digits should be any number between 0-9.
    Mastercard: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/
  };

  // Check if the card number matches the regex for the given card type
  let regex = regexes[cardType];
  if (!regex) {
    console.log("Invalid card type: " + cardType);
    return false;
  }

  let isValid = cardNum.match(regex);

  return isValid !== null;
}
