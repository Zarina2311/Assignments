//Single Number
//Given a non-empty array of integers, every element appears twice except for one.
//Find that single one. Then find the space and time complexity.

//Input [2,2,1] //Output: 1
//Input [4,1,2,1,2] //Output: 4

function singleNumber(nums) {
  let result = 0;

  let memory1 = {};
  let memory2 = {};

  for (let i = 0; i < nums.length; i++) {
    if (memory1[nums[i]]) {
      delete memory1[nums[i]];
      memory2[nums[i]] = 1;
    } else {
      memory1[nums[i]] = 1;
    }
  }

  result = parseInt(Object.keys(memory1)[0]);

  return result;
}

singleNumber([2, 2, 1]); // Output: 1
singleNumber([4, 1, 2, 1, 2]); //Output: 4
