'''
이진탐색 알고리즘

이전 시간에 배운 이진탐색 알고리즘을 통해 다음의 문제를 해결해 봅시다.
이미 정렬이 되어 있는 정수로 이루어진 리스트와 특정 정수가 주어질 때, 
특정 정수가 정수 리스트의 어느 인덱스에 들어가야 하는지 찾는 프로그램을 작성해 봅시다.

입력 예시 1
binary_search([1, 2, 4, 6], 7)
출력 예시 1
4
입력 예시 2
binary_search([1, 3, 5, 6], 2)
출력 예시 2
1
입력 예시 3
binary_search([1, 5, 7, 9], 0)
출력 예시 3
0
'''


def binary_search(nums, num):
    lo, hi = 0, len(nums) - 1

    while lo <= hi:
        mid = (lo + hi) // 2
        if nums[mid] == num:
            return mid
        elif nums[mid] < num:
            lo = mid + 1
        else:
            hi = mid - 1

    return lo
    
    
# 4가 출력되어야 합니다.
print(binary_search([1, 2, 4, 6], 7))

# 1이 출력되어야 합니다.
print(binary_search([1, 3, 5, 6], 2))

# 0이 출력되어야 합니다.
print(binary_search([1, 5, 7, 9], 0))