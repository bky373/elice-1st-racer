def mergeSort(nums):
    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2
    left = mergeSort(nums[:mid])
    right = mergeSort(nums[mid:])
    return merge(left, right)


def merge(left, right):
    merged = []
    lx, rx = 0, 0

    # left/right가 아직 남아 있을 때
    while len(left) > lx and len(right) > rx:
        if left[lx] > right[rx]:
            merged.append(left[lx])
            lx += 1
        else:
            merged.append(right[rx])
            rx += 1

    # left가 아직 남아 있을 때
    while len(left) > lx:
        merged.append(left[lx])
        lx += 1

    # right가 아직 남아 있을 때
    while len(right) > rx:
        merged.append(right[rx])
        rx += 1

    return merged


# [8, 6, 4, 3, 2, 1]이 출력되어야 합니다.
print(mergeSort([1, 6, 3, 8, 2, 4]))

# [9, 7, 4, 3, 2, 1]가 출력되어야 합니다.
print(mergeSort([7, 2, 4, 1, 9, 3]))
