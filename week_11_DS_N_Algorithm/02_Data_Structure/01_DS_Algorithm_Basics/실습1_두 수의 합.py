'''
두 수의 합
숫자들의 배열이 주어지고 표적 숫자가 주어졌다고 합시다.배열에 주어진 숫자들 중 두 개의 숫자를 더하면 표적 숫자가 되는데요, 이때 어떤 두 수를 더하면 표적숫자가 되는지 찾는 문제를 풀어 봅시다.

예를 들어서, [2, 8, 19, 37, 4, 5] 가 배열로 주어지고 12 가 표적으로 주어지면 8,4 를 찾아내시면 됩니다.

입력 배열에는 중복되는 수가 없습니다.
입력 배열에는 합해서 표적이 되는 어떤 두 수가 반드시 있습니다.
출력의 순서는 상관 없습니다. 위 예시의 경우, 8,4 와 4,8은 둘 다 정답으로 인정합니다.
'''

def twoSum(nums, target):
    nums.sort()
    
    lo, hi = 0, len(nums) - 1
    
    while lo < hi:
        sum_two = nums[lo] + nums[hi]
        if sum_two == target:
            return nums[lo], nums[hi]
        elif sum_two < target:
            lo += 1
        elif sum_two > target:
            hi -= 1
    
    return 0,0

def main():
    print(twoSum([2, 8, 19, 37, 4, 5], 12)) # (4, 8) 혹은 (8, 4)가 리턴되어야 합니다.

if __name__ == "__main__":
    main()
