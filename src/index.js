module.exports = function check(str, bracketsConfig) {
  const objSearch = Object.fromEntries(bracketsConfig);
  let stack = [];

  for (const char of str){
    if (objSearch[char]) {
      if (objSearch[char] === char && stack[stack.length-1]===char){
      stack.pop();
      } else {
      stack.push(char);
      }

    } else {
      const closSym = stack.pop();
      if (objSearch[closSym] !== char) {
        return false;
      }
    }
  } 
  return stack.length===0;
}
