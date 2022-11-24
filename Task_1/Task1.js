
function validateCreditCard(creditCardNumwithDashes) {

    // REMOVE DASHES FROM CREDIT CARD NUMBER STRING

    NumberWithNoDashes = removeDashes(creditCardNumwithDashes);
    console.log(NumberWithNoDashes);

    // CHECK IF TOTAL NUMBER ENTERED IS 16 DIGITS IN LENGTH

    if(validateLength(NumberWithNoDashes) !== false)
    {
        // ALL OF THE DIGITS MUST BE NUMBERS IF NOT RETURN FALSE
        if(AllDigitsMustBeNumbers(NumberWithNoDashes) !== false)
        {
            //THE CREDIT CARD NUMBER MUST CONTAIN OF AT LEAST TWO DIFFERENT DIGITS
            if(CheckForTwoDifferentDigits(NumberWithNoDashes) != false)
            {
                // LAST DIGIT OF THE CREDIT CARD NUMBER MUST BE EVEN
                if(CheckForLastNumberToBeEven(NumberWithNoDashes) != false)
                {
                    // SUM OF ALL DIGITS MUST BE GREATER THAN 16
                    return (CheckTotalSumOfCreditCardNum(NumberWithNoDashes));
                }
                else
                {
                    console.log("\n************************************\nCredit Card Number Entered Has Sum Less Than 16\n************************************");
                }
            }
            else
            {
                console.log("\n************************************\nCredit Card Number Entered Does not Contain Two Different Digits\n************************************");
            }
        }
        else
        {
            console.log("\n************************************\nCredit Card Number Entered Does not Contain Numeric Values\n************************************");
        }

    }
    else
    {
        console.log("\n************************************\nCredit Card Number Entered Is less than 16 Digits\n************************************");
    }

}
function CheckTotalSumOfCreditCardNum(NumberWithNoDashes)
{
    let total = 0;
    for (let i = 0; i < NumberWithNoDashes.length; i++) {
        total += Number(NumberWithNoDashes[i]);
    }
    if (total <= 16) {
        return false;
    }

    return true;
}

function CheckForLastNumberToBeEven(NumberWithNoDashes)
{
    if (NumberWithNoDashes[NumberWithNoDashes.length - 1] % 2 !== 0) {
        return false;
    }
}

function CheckForTwoDifferentDigits(NumberWithNoDashes){
    let Temp = {};
    for (let i = 0; i < NumberWithNoDashes.length; i++) {
        Temp[NumberWithNoDashes[i]] = true;
    }
    if (Object.keys(Temp).length < 2) {
        return false;
    }
}

function AllDigitsMustBeNumbers(NumberWithNoDashes){
    for (let i = 0; i < NumberWithNoDashes.length; i++){
        let currentNumber = NumberWithNoDashes[i];
        // TURN THE DIGIT FROM A STRING TO AN INTEGER
        currentNumber = Number.parseInt(currentNumber);
        // CHECK THAT THE DIGIT IS A NUMBER
        if (!Number.isInteger(currentNumber)){
            return false;
        }
    }
}

function validateLength(NumberWithoutDashes)
{
    if (NumberWithoutDashes.length !== 16) {
        return false;
    }
    return true;
}

function removeDashes(creditCardNumwithDashes){
    let NumberWithNoDashes = '';
    for (let i = 0; i < creditCardNumwithDashes.length; i++) {
        if (creditCardNumwithDashes[i] !== '-') {
            NumberWithNoDashes += creditCardNumwithDashes[i];
        }
    }
    return NumberWithNoDashes;
}

function main()
{
/**** tests *****/
console.log(validateCreditCard('9999-7777-8888-0000')); //true
console.log(validateCreditCard('6666-6666-6666-1666')); //true
console.log(validateCreditCard('a923-3211-9c01-1112')); //false
console.log(validateCreditCard('4444-4444-4444-4444')); //false
console.log(validateCreditCard('1211-1111-1111-1112')); //true
}

main()