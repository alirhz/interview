// custome sort function

Array.prototype.customeSort = function () {
  let temp;
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};

// custome Map function

Array.prototype.customMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i]));
  }
  return result;
};

// TWO Sum https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    
  let hash = {};
  
  for(let i = 0;i<nums.length;i++) {
      if(nums[i] in hash){
          return [hash[nums[i]], i];
      }
      let temp = target - nums[i];
      hash[temp]= i;
  }
};

// Merge Two Sorted Lists - https://leetcode.com/problems/merge-two-sorted-lists/

var mergeTwoLists = function(list1, list2) {
  let tempNode = new ListNode(0, null);
  let current = tempNode;
  
  while(list1 && list2) {
      if(list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }
  current.next = list1 || list2;
  
  return tempNode.next
};

// Majority Element - https://leetcode.com/problems/majority-element/

var majorityElement = function(nums) {
  hash = {};
  let mostRepeated = 0,number;
  
  for(let i = 0;i<nums.length;i++) {
      if(nums[i] in hash) hash[nums[i]]++;
      if(!(nums[i] in hash)) hash[nums[i]] = 1;
              
      if(hash[nums[i]] > mostRepeated) {
          mostRepeated = hash[nums[i]];
          number = nums[i];
      }
  }
  return number;
};

// Valid Anagram - https://leetcode.com/problems/valid-anagram/

var isAnagram = function(s, t) {
  let string = s.split("").sort();
  let anagram = t.split("").sort();
  if(string.length != anagram.length) return false;
  for(let i = 0;i<string.length;i++) {
      if(string[i] != anagram[i]) {
          return false;
      }
  }
  return true;
};

//Contains Duplicate - https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
  let hash = {};
  for(let i = 0;i<nums.length;i++) {
      if(hash[nums[i]]) hash[nums[i]]++;
      if(!hash[nums[i]]) hash[nums[i]]=1;
      if(hash[nums[i]] > 1) {
          return true;
      }
  }
  return false;
};

// Binary Search - https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while(left <= right) {
      const mid = Math.floor((right + left) / 2);
      const current = nums[mid];
      if(current < target) {
          console.log(current)
          left = mid + 1;
      }
      else if(current > target) {
         console.log(current)
          right = mid - 1;
      } else {
          return mid
      }
  }
   return -1;
   
};