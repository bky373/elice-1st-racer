'''
가장 가까운 값 찾기

오름차순으로 정렬된 n개의 숫자가 주어지고, 
정수 m이 주어질 때, 
n개의 숫자 중에서 m과 가장 가까운 숫자를 출력하는 프로그램을 작성하시오. 
만약 가장 가까운 숫자가 2개 이상이라면, 
그 중 가장 작은 숫자를 출력한다.

입력 예시 1
1 4 6 7 10 14 16
8
출력 예시 1
7
입력 예시 2
1 4 6 7 10 14 16
12
출력 예시 2
10
문제 조건
입력되는 수의 개수는 최대 100,000개입니다.
만약 가장 가까운 숫자가 2개 이상일 경우, 그 중 가장 작은 값을 출력합니다.
'''

import sys


def getNearest(data, m):
    '''
    n개의 숫자가 list로 주어지고, 숫자 m이 주어질 때, 
    n개의 숫자 중에서 m과 가장 가까운 숫자를 반환하는 함수를 작성하세요.
    '''
    if len(data) == 1:
        return data
    elif len(data) == 2:
        return data[0] if abs(data[0]-m) <= abs(data[1]-m) else data[1]

    mid = len(data) // 2

    if data[mid] < m:
        data = data[mid:]
    else:
        data = data[:mid+1]

    return getNearest(data, m)


def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    data = [int(x) for x in input().split()]
    m = int(input())

    print(getNearest(data, m))


if __name__ == "__main__":
    main()
