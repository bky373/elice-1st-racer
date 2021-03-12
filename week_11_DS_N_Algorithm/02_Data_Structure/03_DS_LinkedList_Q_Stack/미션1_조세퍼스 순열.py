from collections import deque


def josephus(num, target):
    q = deque(list(range(1, num+1)))
    result = []
    while q:
        for _ in range(target-1):
            q.append(q.popleft())
        result.append(q.popleft())
    return result


def main():
    print(josephus(7, 3))  # [3, 6, 2, 7, 5, 1, 4]이 반환되어야 합니다


if __name__ == "__main__":
    main()
