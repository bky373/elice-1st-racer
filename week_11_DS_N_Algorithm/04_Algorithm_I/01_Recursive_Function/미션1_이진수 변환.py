import sys
sys.setrecursionlimit(100000)

def convertBinary(n) :
    '''
    10진수 n을 2진수로 변환하여 반환합니다.

    *주의* : 변환된 2진수는 문자열이어야 합니다.

    예를 들어, 19가 입력될 경우 문자열 "10011"이 반환되어야 합니다.
    '''
    if n == 0: return ""
    return convertBinary(n // 2) + str(n % 2)


def main():
    '''
    이 부분은 수정하지 마세요.
    '''


    n = int(input())

    print(convertBinary(n))

if __name__ == "__main__":
    main()
