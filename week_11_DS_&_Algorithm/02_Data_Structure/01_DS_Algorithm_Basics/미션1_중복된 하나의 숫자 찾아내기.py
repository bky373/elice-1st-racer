def findDuplicate(nums):
    counter = {}
    for n in nums:
        counter[n] = counter.get(n, 0) + 1
    for k, v in counter.items():
        if v == 2:
            return k
    return -1

def main():
    print(findDuplicate([1, 5, 2, 4, 5, 6, 3]))

if __name__ == "__main__":
    main()