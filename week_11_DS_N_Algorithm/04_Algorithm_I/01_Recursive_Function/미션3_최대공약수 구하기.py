def GCD(x, y) :
    '''
    x, y의 최대공약수를 반환하는 함수
    '''
    return x if y == 0 else GCD(y, x % y)

def main():
    '''
    Do not change this code
    '''

    data = input()

    x = int(data.split()[0])
    y = int(data.split()[1])

    print(GCD(x, y))

if __name__ == "__main__":
    main()
