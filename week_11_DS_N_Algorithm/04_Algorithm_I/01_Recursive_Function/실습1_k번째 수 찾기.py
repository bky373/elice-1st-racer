'''
k번째 수 찾기

nn개의 숫자가 차례대로 주어질 때, 
매 순간마다 “지금까지 입력된 숫자들 중에서 k번째로 작은 수”를 반환하는 프로그램을 작성하세요.

프로그램의 입력으로는 첫째줄에 nn과 kk가 입력되고, 둘째줄에 nn개의 숫자가 차례대로 주어집니다.

입력 예시
10 3
1 9 8 5 2 3 5 6 2 10
출력 예시
-1 -1 9 8 5 3 3 3 2 2
문제 조건
nn은 100보다 작은 숫자입니다.
매 순간마다 지금까지의 입력중 kk번째로 작은 수를 출력하되, 없다면 -1을 출력합니다.
입출력 예시 설명
10개의 숫자가 차례대로 주어집니다. 맨 처음 1만 입력을 받았을 경우, 3번째로 작은 숫자가 없으므로 -1을 출력합니다. 그 다음 9도 마찬가지입니다. 세 번째로 숫자 8을 입력받는 순간, 지금까지 입력받은 숫자는 1, 9, 8 세 개이고, 이 중 3 번째로 작은 숫자인 9를 출력합니다. 
마찬가지로 숫자 하나를 입력받을 때 마다 3번째로 작은 숫자를 출력합니다.
'''


def findKth(myInput, k) :
    '''
    매 순간마다 k번째로 작은 원소를 리스트로 반환합니다.
    '''

    result = []
    data = []

    for element in myInput:
        data.append(element)
        data.sort()

        if len(data) < k:
            result.append(-1)
        else:
            result.append(data[k-1])

    return result

def main():
    '''
    테스트를 하고싶으면, 아래 부분을 수정합니다.
    '''

    firstLine = [int(x) for x in input().split()]
    myInput = [int(x) for x in input().split()]

    print(*findKth(myInput, firstLine[1]))
if __name__ == "__main__":
    main()
