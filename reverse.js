/**

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.



*/

var reverse = function(x) {
    let xs = x.toString().split("").reverse()
    if(xs[xs.length-1]=="-"){
        xs.unshift("-")
        xs.pop();
    }
    xs = xs.join("");
    
    if (xs > Math.pow(2,31)-1 || xs < -Math.pow(2,31))
        return 0
   else return xs;
};
