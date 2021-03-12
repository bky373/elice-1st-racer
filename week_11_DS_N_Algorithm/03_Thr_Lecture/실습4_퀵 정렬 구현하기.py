def quickSort(array):
    '''
    퀵정렬을 통해 오름차순으로 정렬된 array를반환하는 함수를 작성하세요.
    '''
    if len(array) <= 1: return array
    
    pivot = array[0]
    left = [n for n in array[1:] if n < pivot]
    right = [n for n in array[1:] if n >= pivot]
    return quickSort(left) + [pivot] + quickSort(right)

def main():
    line = [int(x) for x in input().split()]

    print(*quickSort(line))

if __name__ == "__main__":
    main()
