/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also
known as a shift cipher. In a shift cipher the meanings of the letters are
shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are
shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a
decoded string.

All letters will be uppercase. Do not transform any non-alphabetic
character (i.e. spaces, punctuation), but do pass them on.
*/

function rotDecoder(str, rotNum = 13) {
  // I added some constants as a bonus so that if you want to
  // decode a different ROT number cypher you can by simply
  // changing the 13 to whatever the strings ROT cypher is.
  const ROT_ENCRYPTION = rotNum
  const CIPHER = 26 - ROT_ENCRYPTION
  const START = 65
  const END = 91
  const MIDDLE = END - CIPHER;

  return str
    .toUpperCase()
    .split("")
    .map(character => {
      const charCode = character.charCodeAt(0);
      return (charCode >= START && charCode < MIDDLE)
        ? String.fromCharCode(charCode+CIPHER)
        : (charCode >= MIDDLE && charCode < END)
          ? String.fromCharCode(START+(charCode%MIDDLE))
          : character
    })
    .join("")
}

console.log(rotDecoder("SERR PBQR PNZC", 13));
console.log(rotDecoder("SERR CVMMN!", 13));
console.log(rotDecoder("SERR YBIR?", 13));
console.log(rotDecoder("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13));
console.log(rotDecoder("xi ldgzh udg diwtg GDI Rdsth idd :)", 15));
