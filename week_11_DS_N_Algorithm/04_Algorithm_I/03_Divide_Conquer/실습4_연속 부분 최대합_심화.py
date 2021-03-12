'''
연속부분최대합 (Medium)

n개의 숫자가 주어질 때, 연속 부분을 선택하여 그 합을 최대화 하는 프로그램을 작성하시오. 
예를 들어, 다음과 같이 8개의 숫자가 있다고 하자.

1 2 -4 5 3 -2 9 -10

이 때, 연속 부분이란 연속하여 숫자를 선택하는 것을 말한다. 
가능한 연속 부분으로써 [1, 2, -4], [5, 3, -2, 9], [9, -10] 등이 있을 수 있다. 
이 연속 부분들 중에서 가장 합이 큰 연속 부분은 [5, 3, -2, 9] 이며, 
이보다 더 합을 크게 할 수는 없다. 
따라서 연속 부분 최대합은 5+3+(-2)+9 = 15 이다.

입력 예시
1 2 -4 5 3 -2 9 -10
출력 예시
15
문제 조건
입력되는 수의 개수는 최대 100,000개입니다.
'''


import sys


def getSubsum(data):
    '''
    n개의 숫자가 list로 주어질 때, 그 연속 부분 최대합을 반환하는 함수를 작성하세요.
    '''
    n = len(data)

    if n == 1:
        return data[0]

    '''
    왼쪽, 오른쪽, 양쪽에 걸치는 부분의 최대합 구하기
    '''
    mid = n // 2
    left = getSubsum(data[:mid])
    right = getSubsum(data[mid:])

    total = 0
    left_sum = 0
    right_sum = 0

    for i in range(mid-1, -1, -1):
        total += data[i]
        left_sum = max(left_sum, total)

    total = 0
    for i in range(mid, n):
        total += data[i]
        right_sum = max(right_sum, total)

    return max([left, right, left_sum + right_sum])


def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    data = [int(x) for x in input().split()]

    print(getSubsum(data))


if __name__ == "__main__":
    main()

