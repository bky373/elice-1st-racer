class Fib():
    def __init__(self):
        self.memo = {}

    def fibonacci(self, num):
        if num <= 1: return num
        if num in self.memo: return self.memo[num]
        self.memo[num] = self.fibonacci(num - 1) + self.fibonacci(num - 2)
        return self.memo[num]
        
def main():
    print(Fib().fibonacci(10)) # should return 55

if __name__ == "__main__":
    main()