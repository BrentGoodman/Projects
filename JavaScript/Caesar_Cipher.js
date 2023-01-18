//This is an assignment for my freeCodeCamp JavaScript Certificate

function rot13(str) {
    let charCode = 0;
    let strArr = [];
    strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
      charCode = strArr[i].charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        if (charCode > 77) {
          charCode = charCode - 13;
        }
        else {
          charCode = charCode + 13;
        }
  
        strArr.splice(i,1,String.fromCharCode(charCode));
      }
    }
    return strArr.join('');
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));