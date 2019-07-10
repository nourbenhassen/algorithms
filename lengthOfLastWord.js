/**

Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.

*/






var lengthOfLastWord = function(s) {
    sArr = s.split(" ");
    console.log(sArr);
    for (i=sArr.length-1; i>-1; i--) {
        if (sArr[i] == "" && i == 0)
            return 0;
        else if (sArr[i] == "")
            continue;
        
        return sArr[i].length;
    }
};
