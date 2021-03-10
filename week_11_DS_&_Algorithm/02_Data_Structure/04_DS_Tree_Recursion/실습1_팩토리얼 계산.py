# 1 - 반복문
# def factorial(num):
#     x = 1
#     for each in range(1, num + 1):
#         x = x * each
#     return x


# 2 - 재귀 함수
def factorial(num):
    if num <= 1:
        return num
    return num * factorial(num - 1)


def main():
    print(factorial(5))  # should return 120


if __name__ == "__main__":
    main()
