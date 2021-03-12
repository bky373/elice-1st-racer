# 방법 1 - 반복문 활용
LIMIT_NUMBER = 1000000007

def getPower(m, n):
    '''
    m^n 을 LIMIT_NUMBER로 나눈 나머지를 반환하는 함수를 작성하세요.
    '''
    result = 1
    while n:
        if n & 1:  # n이 짝수면 False, 홀수면 True
            result *= m
        n //= 2
        m *= m % LIMIT_NUMBER
    return result % LIMIT_NUMBER


# 방법 2 - 재귀함수 활용
def getPower2(m, n):
    '''
    m^n 을 LIMIT_NUMBER로 나눈 나머지를 반환하는 함수를 작성하세요.
    '''
    if n == 0: return 1
    elif n % 2 == 0 :
        temp = getPower2(m, n//2)
        return (temp * temp) % LIMIT_NUMBER
    else:
        temp = getPower2(m, (n-1) // 2)
        return (temp * temp * m) % LIMIT_NUMBER

def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    myList = [int(v) for v in input().split()]

    print(getPower(myList[0], myList[1]))
    print(getPower2(myList[0], myList[1]))


if __name__ == "__main__":
    main()
