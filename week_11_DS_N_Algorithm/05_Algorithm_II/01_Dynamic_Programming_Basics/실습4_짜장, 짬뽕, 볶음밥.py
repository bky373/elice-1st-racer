'''
짜장, 짬뽕, 볶음밥

중식을 좋아하는 상훈이는 늘 점심엔 짜장, 짬뽕, 볶음밥 셋 중 하나를 먹어야 기분이 좋아진다. 
상훈이에겐 규칙이 하나 있는데, 전날 먹은 음식은 먹지 않는다는 것이다. 예를 들어 어제 짜장면을 먹었으면, 오늘은 짬뽕이나 볶음밥 중 하나를 먹어야 하는 것이다.

짜장, 짬뽕, 볶음밥 선호도(먹고 싶은 정도)는 그날그날 다른데, 이 선호도가 주어질 때, 상훈이의 총 선호도를 최대로 만들어주는 조합을 찾으면 된다. 
(선호도는 먹은 음식 선호도의 총합으로 계산된다.)

실습
입력
첫 줄에는 며칠동안 먹을 것인지에 대한 정수(1 \leq n \leq 100,0001≤n≤100,000)가 주어지고 그 밑으로 각각 짜장, 짬뽕, 볶음밥에 대한 하루별 선호도가 주어진다. 선호도는 양의 정수만 들어온다고 가정한다.

출력
상훈이가 얻을 수 있는 선호도 총합의 최댓값을 출력한다.

입력 예시
3
27 8 35
18 36 10
7 22 45
출력 예시
116
'''


def eating(data) :
    '''
    각 날짜 별 음식의 선호도가 list로 주어질 때, 
    상훈이가 얻을 수 있는 선호도 총합의 최댓값을 반환하는 함수를 작성하세요.
    '''
    days = len(data)
    d = [[0] * 3 for i in range(days + 1)]
    
    for i in range(1, days + 1):
        for j in range(3):
            for k in range(3):
                if j == k: continue # 전날 먹은 음식(j)과 오늘 먹은 음식(k)이 같을 경우 넘어감
                d[i][j] = max(d[i][j], d[i-1][k])
            d[i][j] += data[i-1][j]
    return max(d[days][i] for i in range(3))


import sys

def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    n = int(input())

    data = []

    for _ in range(n) :
        __line = [int(x) for x in input().split()]
        data.append(__line)

    print(eating(data))

if __name__ == "__main__":
    main()
