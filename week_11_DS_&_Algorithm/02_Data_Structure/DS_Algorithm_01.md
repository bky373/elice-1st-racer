# 자료구조 & 알고리즘 학습 정리 I

## 자료구조와 알고리즘

### 자료구조

데이터의 저장과 흐름에 사용됨

### 알고리즘

어떤 프로그램을 실행할 때의 계산 절차를 의미함

## 시간 복잡도

Time complexity <br>알고리즘에 사용되는 총 연산 횟수 <br>

> 시간 복잡도는 실행 시간이 아니라, 총 연산 횟수와 관련되어 있다.

### 단순한 연산횟수 계산

```python
# 1
sum = 0  # 1번
for i in [1, 2, 3, 4]:
	sum += i;  # 4번

'''
따라서, 시간 복잡도 = 1 + 4 = 5번(회)
'''

# 2
randomNumber = 0  # 1번
nums = [1, 2, 3, 4]  # 1번
for i in range(len(nums)):
    for j in range(len(nums)):
        randomNumber += nums[i] * nums[j]  # 16번
        
'''
따라서, 시간 복잡도 = 1 + 1 + 16 = 18번(회)
'''
```

## Big-O 시간 복잡도

**Big-O** = 시간복잡도 함수의 **가장 높은 차수**를 표현

>aN + b = O(N) <br>aNlogN + b = O(NlogN) <br>aN^2 + bN + c = O(N^2)
>
>계수가 시간 복잡도에 미치는 영향은 차수에 비해 매우 미미하다. <br>그래서 계수는 시간 복잡도에 포함시키지 않는다. 

### Big-O 시간 복잡도 계산 법칙

> 1. For / while loop 가 한 번 중첩될 때마다 **O(N)**
>
> 2. 자료구조 사용, 다른 함수 호출에는 **각각의 O(N)을 파악**해야 한다. <br>아래는 예시이며, 다른 경우에서는 다른 시간 복잡도가 구해진다.
>
>    ```python
>    # Big-O 시간 복잡도 = O(N) [ARRAY]
>    nums = [2, 8, 19, 37, 4, 5]
>    if num in nums:
>    ```
>
>    ```python
>    # Big-O 시간 복잡도 = O(1) (SET)
>    nums = {2, 8, 19, 37, 4, 5}
>    if num in nums:
>    ```
>
>    ```python
>    # Big-O 시간 복잡도 = O(NlogN)
>    num.sort()
>    ```
>
> 3. 매번 절반씩 입력값이 줄어들면 **O(logN)**



### N에 대한 복잡도

```python
# 1 -> O(1): N의 크기에 관계없이 항상 일정하다는 의미
def doNothing(nums):  # nums: N개의 숫자
	return nums  # 시간 복잡도 = 1번 (경우에 따라 다르게 보기도 함)

# 2 -> 시간 복잡도 = N+2 / Big-O 시간 복잡도 = O(N)
def doSomething(nums):  # nums: N개의 숫자
    sum = 0  # 1번
    for num in nums:
        sum += num   # N번
    return sum  # 1번

# 3 -> 시간 복잡도 = 2*N^2 + 2 / Big-O 시간 복잡도 = O(N^2)
def doManything(nums):  # nums: N개의 숫자
    allPairs = []  # 1번
    for i in range(len(nums)):
        for j in range(len(nums)):  # N*N + 2번
			if nums[i] < nums[j]:  # 조건문 1번 + 조건문 블록 1번
                allPairs.append((nums[i], nums[j]))
            else:
                allPairs.append((nums[i], nums[j]))
	return allPairs  # 1번
```

## 공간 복잡도

Space Complexity<br>알고리즘에 사용되는 메모리 공간의 총량 <br>코드가 얼마나 많은 메모리를 사용하는가와 연관됨

### 공간 복잡도 계산하기

```python
# 1 -> O(1)
a = 1

# 2 -> O(N)
a = [num for num in nums]

# 3 -> O(N^2)
a = [[num for num in nums] for num in nums]
```


<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**