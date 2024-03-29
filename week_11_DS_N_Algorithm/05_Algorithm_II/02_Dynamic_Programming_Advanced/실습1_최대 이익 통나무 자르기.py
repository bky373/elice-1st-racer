'''
최대 이익 통나무 자르기
깨비는 도깨비방망이를 만드는 목공소에서 일합니다. 
깨비는 길이 N짜리 통나무를 나무꾼에게 납품받아서 여러조각으로 잘라 여러개의 도깨비 방망이를 제작합니다.

도깨비방망이로 만들 수 있는 표준길이들이 주어지며, 각 길이에 따라 판매가격도 상이합니다. 
길이에 따른 가격표를 보고 길이 N의 통나무를 한개 이상의 조각으로 잘랐을 때 볼 수 있는 최대이익을 구하세요.

예를 들어, 길이 4짜리의 통나무가 주어지고, 
아래와 같은 가격표가 있을 때 최대 가격은 2짜리 2개로 조각냈을 때 20*2=40원으로 최대입니다. 
4짜리 통째로 팔 경우 36원, 1짜리 4조각으로 팔경우 4원으로 모두 오답입니다.

length	price
1	1
2	20
3	33
4	36
실습
입력
통나무의 길이인 정수 N과 판매가능한 길이의 갯수인 M이 입력되고 N과 M은 1000보다 작거나 같다.

출력
N길이의 통나무를 한개 이상의 조각으로 잘랐을 때의 최대이익을 출력한다.

입력 예시
4 4
1 1
2 20
3 33
4 36
출력 예시
40
'''



def cutRod(N, myData) :
    '''
    통나무의 길이 N과 가격표가 dictionary로 주어질 때, 통나무를 잘라서 얻을 수 있는 최대 이익을 반환하세요.
    예) 길이 1의 가격이 3일 때, myData[1] = 3
    '''
    table = [0 for i in range(N+1)]

    for n in range(N+1):
        for l, p in myData.items():
            if n >= l:
                table[n] = max(table[n], p + table[n-l])
    
    return table[N]


import sys

def main():
    '''
    이 부분은 수정하지 마세요.
    '''
    
    data = dict()
    N, M = input().split()
    N = int(N)
    M = int(M)
    
    for i in range(M):
        l, p = input().split()
        data[int(l)] = int(p)

    print(cutRod(N, data))

if __name__ == "__main__":
    main()
