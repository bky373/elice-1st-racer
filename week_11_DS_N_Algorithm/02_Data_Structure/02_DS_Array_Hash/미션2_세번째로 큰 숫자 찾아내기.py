'''
세번째로 큰 숫자 찾아내기

0보다 큰 정수들의 배열이 주어졌다고 합시다. 
이 배열에서 세번째로 큰 수를 찾아 내 봅시다.

예를 들어서, 
[2, 8, 19, 37, 4, 5, 12, 50, 1, 34, 23]가 입력으로 주어졌을 경우, 
가장 큰 수는 50, 두번째로 큰 수는 37, 세번째로 큰 수는 34입니다. 
따라서 34를 반환해야 합니다.

시간 복잡도를 고려하면서 여러가지 방법으로 문제를 풀어 봅시다.
'''
def merge_split_sort(data):
    if len(data) <= 1:
        return data

    mid = len(data) // 2
    left = merge_split_sort(data[:mid])
    right = merge_split_sort(data[mid:])
    return merge(left, right)

def merge(left, right):
    sorted = []
    lx, rx = 0, 0

    while lx < len(left) and rx < len(right):
        if left[lx] < right[rx]:
            sorted.append(left[lx])
            lx += 1
        else:
            sorted.append(right[rx])
            rx += 1
    
    if lx < len(left):
        sorted.extend(left[lx:])

    if rx < len(right):
        sorted.extend(right[rx:])

    return sorted

def thirdMax(nums):
    print(merge_split_sort(nums))
    return merge_split_sort(nums)[-3]

def main():
    print(thirdMax([2, 8, 19, 37, 4, 5, 12, 50, 1, 34, 23])) # should return 34

if __name__ == "__main__":
    main()
