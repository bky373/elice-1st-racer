import sys


def mergeSort(data):
    '''
    n개의 숫자를 합병정렬을 이용하여 정렬한 결과를 list로 반환하는 함수를 작성하세요.
    '''
    if len(data) == 1:
        return data

    mid = len(data) // 2
    left = mergeSort(data[:mid])
    right = mergeSort(data[mid:])
    return merge(left, right)


def merge(left, right):
    sorted = []
    lx, rx = 0, 0

    while lx < len(left) and rx < len(right):
        if left[lx] < right[rx]:
            sorted.append(left[lx])
            lx += 1
        else:
            sorted.append(right[rx])
            rx += 1

    if lx < len(left):
        sorted.extend(left[lx:])

    if rx < len(right):
        sorted.extend(right[rx:])

    return sorted


def main():
    '''
    이 부분은 수정하지 마세요.
    '''

    data = [int(x) for x in input().split()]

    print(*mergeSort(data))


if __name__ == "__main__":
    main()
