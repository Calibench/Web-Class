// Script for Project 2

/* global window, alert, document */

// testLength function
function testLength(value, length) 
{
    var check = value.charAt(0);

    if((check === '3' && length === 15) || ((check === '4' || check === '5' || check === '6') && length === 16))
    {
        return true;
    }

    return false;
}

// testNumber function
function testNumber(value) 
{
    if (isNaN(value)) 
    { 
        return false;
    } 

    return true;
}

// validateControl function
function validateControl(control, name) 
{
    var val = control.value;

    if (name === "CVC") 
    { 
        if (!testNumber(val)) 
        { 
            window.alert(name + " must be a number");
            return false;
        }  
    } 
    else 
    {
        if (testNumber(val)) 
        {
            window.alert(name + " must be a string");
            return false;
        }
    }

    return true;
}
// validateCreditCard function
function validateCreditCard(value) 
{
    value = value.replace(/\s+/g, '');

    if (!testNumber(value)) 
    {
        window.alert("Invalid credit card number");
        return false;
    }

    var firstDigit = value.charAt(0);
    var cardLength = value.length;
    var validFirstDigit = false;

    if (firstDigit === '3' || firstDigit === '4' || firstDigit === '5' || firstDigit === '6') 
    {
        validFirstDigit = true;
    } 

    if (!validFirstDigit) 
    {
        window.alert("Invalid credit card type");
        return false;
    }

    if (!testLength(value, cardLength)) 
    {
        window.alert("Invalid credit card number length");
        return false;
    }

    return true;
}

// validateDate function
function validateDate(value) 
{
    var today = new Date();
    var selectedDate = new Date(value);

    if (selectedDate < today) 
    {
        window.alert("Invalid expiry date");
        return false;
    }

    return true;
}

// validateEmail function
function validateEmail(value) 
{
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) 
    {
        window.alert("Invalid email address");
        return false;
    }

    return true;
}

// validateCarType function
function validateCarType(control) 
{
    if (!control) 
    {
        window.alert("Please select a car type");
        return false;
    }

    return true;
}

// validateState function
function validateState(value) 
{
    if (value === "Select State") 
    {
        window.alert("Please select a state");
        return false;
    }

    return true;
}

// validateDateTime function
function validateDateTime(value) 
{
    var today = new Date();
    var dateTime = new Date(value);

    if (dateTime <= today) 
    {
        window.alert("Invalid pickup time. The pickup time is before today");
        return false;
    }

    return true;
}

// validateDropOffTime function
function validateDropOffTime(pickUpTime, dropOffTime) 
{
    var pickUpDate = new Date(pickUpTime);
    var dropOffDate = new Date(dropOffTime);

    if (pickUpDate >= dropOffDate) 
    {
        window.alert("Invalid drop-off time. The drop off time is before the pickup date");
        return false;
    }

    return true;
}

function validateForm() 
{
    var pickUpLocation = document.getElementById("pickup");
    var pickUpTime = document.getElementById("pickuptime");
    var dropOffLocation = document.getElementById("dropoff");
    var dropOffTime = document.getElementById("dropofftime");
    var carType = document.querySelector('input[name="cartype"]:checked');
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var nameOnCard = document.getElementById("namecard");
    var cardNumber = document.getElementById("cardnum");
    var emailAddress = document.getElementById("email");
    var cvv = document.getElementById("securitycode");
    var expirationDate = document.getElementById("expiry");


    if (!validateControl(pickUpLocation, "PickUp Location") || !validateState(pickUpLocation.value)) 
    {
        return false;
    }

    if (pickUpTime.value === "") 
    {
        alert("Please enter a pick-up time.");
        return false;
    }

    if (!validateDateTime(pickUpTime.value)) 
    {
        return false;
    }

    if (!validateControl(dropOffLocation, "DropOff Location") || !validateState(dropOffLocation.value)) 
    {
        return false;
    }

    if (dropOffTime.value === "") 
    {
        alert("Please enter a drop off time.");
        return false;
    }

    if (!validateDropOffTime(pickUpTime.value, dropOffTime.value)) 
    {
        return false;
    }

    if (!validateCarType(carType)) 
    {
        return false;
    }

    if (!validateControl(firstName, "First Name") || !validateControl(lastName, "Last Name")) 
    {
        return false;
    }

    if (!validateEmail(emailAddress.value)) 
    {
        return false;
    }

    if (!validateControl(nameOnCard, "Name on Card"))
    {
        return false;
    }

    if (!validateCreditCard(cardNumber.value)) 
    {
        return false;
    }

    if (!validateControl(cvv, "CVC")) 
    {
        return false;
    }

    if (!validateDate(expirationDate.value)) 
    {
        return false;
    }

    window.alert("Payment Submitted");
    return true;
}