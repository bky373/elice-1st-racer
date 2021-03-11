'''
1로 만들기

어떤 수가 입력으로 들어오면 몇번의 연산을 통해 
숫자를 1로 가장 빨리 만들 수 있을지 계산하는 함수를 작성해 봅시다.

할 수 있는 연산은 다음과 같으며 어느연산을 먼저 수행하는지에 대한 순서는 없습니다.
- 3의 배수라면 3으로 나눕니다.
- 2의 배수라면 2로 나눕니다.
- 1을 뺍니다.

예를 들어 10이 입력되었다면, 
10 -> 5 -> 4 -> 2 -> 1의 4번의 과정을 거쳐 1로 만들 수 있습니다.

하지만 10 -> 9 -> 3 -> 1의 방법으로 3번의 과정을 거쳐 더 빠르게 1로 만들 수 있습니다.
또한 이것이 가장 빠른 방법입니다.

이와같이 숫자가 입력되면 가장 빠르게 1로 만드는 연산의 횟수를 출력하는 프로그램을 작성해 봅시다.
'''

from collections import deque


def convertTo1(num):
    if num == 1:
        return 0

    q = deque([num])
    tour = [0] * (num + 1)
    step = [0] * (num + 1)
    min_count = num

    while q:
        now = q.popleft()
        if now == 1:
            return step[now]

        if now % 3 == 0:
            nx = now // 3
            if not tour[nx]:
                q.append(nx)
                tour[nx] = 1
                step[nx] = step[now] + 1

        if now % 2 == 0:
            nx = now // 2
            if not tour[nx]:
                q.append(nx)
                tour[nx] = 1
                step[nx] = step[now] + 1

        nx = now - 1
        if not tour[nx]:
            q.append(nx)
            tour[nx] = 1
            step[nx] = step[now] + 1

    return min_count


def main():
    print(convertTo1(10))


if __name__ == "__main__":
    main()
