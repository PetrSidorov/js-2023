// TODO Reorganize String
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.

// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""

// Constraints:

// 1 <= s.length <= 500
// s consists of lowercase English letters.

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const arrayFromString = s.split("");
  for (let i = 0; i < arrayFromString.length; i++) {
    if (arrayFromString[i] == arrayFromString[i + 1]) {
      arrayFromString.splice(i + 1);
    }
  }
};
