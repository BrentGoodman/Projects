//This is an assignment for my freeCodeCamp JavaScript Certificate

function telephoneCheck(str) {
    const regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/
    return regex.test(str);
    return true;
  }
  
  console.log(telephoneCheck("2 757 622-7382"));
  console.log(telephoneCheck("10 (757) 622-7382"));
  console.log(telephoneCheck("27576227382"));
  console.log(telephoneCheck("(275)76227382"));
  console.log(telephoneCheck("(555)5(55?)-5555"));
  console.log(telephoneCheck("1 555 555 5555"));
  console.log(telephoneCheck(1(555)555-5555));
  console.log(telephoneCheck((555)555-5555));
  console.log(telephoneCheck(555-555-5555));