def removeDuplicate(nums):
    result = [nums[0]]
    
    for i in range(1, len(nums)):
        if nums[i-1] != nums[i]:
            result.append(nums[i])
    
    return result

def main():
    print(removeDuplicate([1, 1, 2, 2, 2, 2, 5, 7, 7, 8])) # [1, 2, 5, 7, 8]을 리턴해야 합니다

if __name__ == "__main__":
    main()