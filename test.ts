function longestCommonPrefix(strs) {
    let commonPrefix = "";
    let lastPrefix = "";

    for (let i = 0; i< strs.length; i++) {
      for (let j =0; j< strs[i].length; j++) {
          console.log(i,j,strs[i][j], strs[i])
      }
    }

    return commonPrefix;
};

console.log(longestCommonPrefix(["flower","flow","flight"])) 