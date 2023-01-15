# creditCardRegexValidator
Simple Credit card regex validator for Visa and Mastercards

### To install on local machine

clone the repository - 
```
git clone https://github.com/iamifechi/creditCardRegexValidator
```
run 
```
npm install 
```

### To run program
The function validateCard takes 2 string arguments 'card number' and 'card type' respectively and 
returns true if card number matches the regex of the card type or false if it doesn't match or card type is invalid/undefined.

```validateCard(cardNum: string, cardType: string)```

### Card Types
Current card types are **'Visa'** and **'Mastercard'**
and case sensitive.

### Examples

```
validateCard('4155279860457', 'Visa')
//Test case 1 outputs true
```

```
validateCard('4155 2798 604579', 'Visa')
//Test case 2 outputs false
```

```
validateCard('5155 2798 6045 7678', 'Mastercard')
//Test case 3 outputs true
```

```
validateCard('2255 2798 6045 7678', 'Mastercard')
//Test case 4 outputs true
```

```
validateCard('2155 2798 6045 7678', 'Mastercard')
//Test case 5 outputs false
```
