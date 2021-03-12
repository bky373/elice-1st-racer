'''
Fractional knapsack

n개의 물건이 있고, 각 물건은 무게 w_i와 가치 c_i를 갖는다. 
이제 이 물건들을 배낭에 넣으려 한다. 
이 배낭은 무게 m까지를 버틸 수 있다.

한 가지 재미있는 사실은, 물건을 쪼갤 수 있다는 것이다. 
물론, 물건을 쪼개게 되면 무게가 줄지만, 가치도 줄게 된다. 
예를 들어, 무게를 절반으로 줄이면 가치 역시도 절반으로 줄어들게 된다.

배낭이 버틸 수 있는 무게 m과 n개의 물건의 정보가 주어질 때, 
배낭이 담을 수 있는 가치의 최댓값을 소숫점 넷째자리에서 반올림하여 출력하는 프로그램을 작성하세요.

입력에 첫줄에는 물건의 개수 n과 베낭의 버틸수 있는 무게 m이 입력됩니다.

이후 n개의 줄에 대하여 각 물건의 무게 w_i, 그리고 가치 c_i가 주어진다.

입력 예시 1
4 10
3 10
2 7
4 9
5 13
출력 예시 1
30.000
입력 예시 2
4 11
3 10
2 7
4 9
5 13
출력 예시 2
32.250

문제 조건
물건의 개수는 최대 100,000개 입니다.
'''


import sys


def fKnapsack(materials, m):
    '''
    크기 m까지 버틸 수 있는 베낭이 담을 수 있는 최대 가치를 반환하는 함수를 작성하세요.

    주의 : 셋째 자리에서 반올림하는 것을 고려하지 않고 작성하셔도 됩니다. 
    '''
    materials.sort(key=lambda x: (x[1]/x[0]), reverse=True)

    max_val = 0
    for item in materials:
        if item[0] <= m:
            m -= item[0]
            max_val += item[1]
        else:
            fracation = m / item[0]
            max_val += fracation * item[1]
            break

    return max_val


def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    line = [int(x) for x in input().split()]

    n = line[0]
    m = line[1]

    materials = []

    for _ in range(n):
        data = [int(x) for x in input().split()]
        materials.append((data[0], data[1]))

    print("%.3lf" % fKnapsack(materials, m))


if __name__ == "__main__":
    main()
