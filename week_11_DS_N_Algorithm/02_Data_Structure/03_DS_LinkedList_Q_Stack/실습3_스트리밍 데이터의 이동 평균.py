'''
스트리밍 데이터의 이동 평균
정수 데이터가 스트리밍으로 (한번에 하나씩) 주어진다고 합시다. 이때, 주어진 범위 만큼의 이동 평균을 구하는 클래스 MovingAvg를 만들어 봅시다.

MovingAvg는 처음에 이동 평균의 범위를 입력받아서 초기화 되며, 매 정수 데이타가 입력되는 nextVal(num)함수는 이때까지의 이동 평균을 반환합니다.

예를 들어서, 2,8,19,37,4,5 의 순서로 데이터가 입력되고, 이동 평균의 범위는 3이라고 합시다. 이 경우 다음과 같이 MovingAvg가 사용 될 것입니다.

ma = MovingAvg(3)
print(ma.nextVal(2))    
# 현재까지 입력된 값이 2밖에 없으므로, 2를 반환합니다.

print(ma.nextVal(8))    
# 현재까지 입력된 값이 2와 8이므로, (2 + 8) / 2 = 5 를 반환합니다.

print(ma.nextVal(19))   
# (2 + 8 + 19) / 3 = 9.666666666666666 를 반환합니다.

print(ma.nextVal(37))    
# 이동 평균의 범위가 3이므로, 지난 3개의 값의 평균 (8 + 19 + 37) / 3 = 21.333333333333332 을 반환합니다.

print(ma.nextVal(4))    
# (19 + 37 + 4) / 3 = 20 을 반환합니다.

print(ma.nextVal(5))    
# (37 + 4 + 5) / 3 = 15.333333333333334 를 반환합니다.

'''


import queue

class MovingAvg():
    def __init__(self, size):
        self.size = size
        self.q = queue.Queue()
        self.sum = 0

    def nextVal(self, num):
        if self.q.qsize() >= self.size:
            self.sum -= self.q.get()
        self.q.put(num)
        self.sum += num
        return self.sum / self.q.qsize()

def queueExample():
    q = queue.Queue()
    q.put(1)
    q.put(2)
    print(q.qsize())
    print(q.get())
    print(q.qsize())
    print(q.get())
    
def main():
    queueExample()

    nums = [2,8,19,37,4,5]
    ma = MovingAvg(3)
    results = []
    for num in nums:
        avg = ma.nextVal(num)
        results.append(avg)
    print(results) # [2.0, 5.0, 9.666666666666666, 21.333333333333332, 20.0, 15.333333333333334]
if __name__ == "__main__":
    main()

