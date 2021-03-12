# 알고리즘 문제 풀이

- 엘리스 AI 서비스 트랙 11주차 화요일 / 목요일 강의 (21/03/09, 21/03/11)

## 배열의 회전

배열을 회전 시켜봅시다. 정수들이 포함되어 있는 배열과, 숫자 k가 입력으로 주어집니다. 이때 해당 배열을 k 만큼 회전 시켜 봅시다.

예를 들어서, `[1, 2, 3, 4, 5, 6, 7, 8, 9]` 와 `4`가 입력으로 주어졌을 경우 `[6, 7, 8, 9, 1, 2, 3, 4, 5]` 를 반환하면 됩니다.

- k 는 배열의 길이 n 보다 작다고 가정합시다.
- 다양한 방법으로 풀어 보도록 합시다.
- (추가) 공간 복잡도 O(1)으로 풀 수 있는 방법도 생각 해 봅시다. 이때 주어진 함수 partialReverse를 활용해도 됩니다.

### 풀이

- **아이디어 1** : 오른쪽으로 k번 이동하는 문제. k를 기준으로 배열을 두 개로 나눌 수 있는데, 이 경우를 두 가지로 다시 나눠볼 수 있다. 

  >  `nums[:k+1] + nums[k:]`와 `nums[-k:] + nums[:-k]` 
  >
  >  여기서, 주의해야 할 부분이 있는데
  >
  >  `nums[:k+1] + nums[k:]`는 왼쪽 회전 방식을 나타내고,
  >
  >  `nums[-k:] + nums[:-k]`는 오른쪽 회전 방식을 나타낸다.
  >
  >  nums의 길이와 k값에 따라 두 코드는 다른 결과물을 갖는다.
  >
  >  문제의 출력 결과값에 따라 원하는 회전 방식을 선택하면 된다.

- **아이디어 2** : 부분역순(partialReverse) 함수를 활용하여 해결할 수도 있다. 먼저 전체를 역순하고, 두 개의 서브 배열을 부분역순으로 정렬한다면 공간 복잡도 O(1)으로 해결할 수 있다.

## 아나그램 탐지

아나그램(Anagram)은 한 문자열의 문자를 재배열해서 다른 뜻을 가지는 다른 단어로 바꾸는 것을 의미합니다.

두 개의 문자열이 주어졌을 때, 서로가 서로의 아나그램인지 아닌지의 여부를 탐지하는 함수를 만들어 보세요.

- `elice` 와 `leice` 는 아나그램입니다. `True`를 리턴해야 합니다.
- `cat` 과 `cap` 는 아나그램이 아닙니다. `False` 를 리턴해야 합니다.
- `iamlordvoldemort` 와 `tommarvoloriddle` 은 아나그램입니다. `True`를 리턴해야 합니다.
- 문자열의 모든 문자는 영어 소문자라고 가정합시다.

### 풀이

1. 정렬(sorted) 활용 : 두 문자열을 각각 정렬한 후 같은지 비교한다.

   > 시간복잡도: O(nlogn)

2. Dictionary 활용 : 문자열 각각의 알파벳을 Key로, 개수를 Value로 한다.

   > 딕셔너리 두 개로 풀 수도 있고, 하나로도 풀 수 있다.
   >
   > 아래는 딕셔너리 하나를 이용하는 방법을 사용했다.
   >
   > 우선, 함수를 하나 정의한다.
   >
   > ```python
   > def is_ anagram(str1, str2):
   > ```
   >
   > 그리고 첫 번째 문자열을 돌려본다.
   >
   > ```python
   > for s in str1:
   > 	counter[s] = counter.get(s, 0) + 1
   > ```
   >
   > >  get(x, default) 함수는 x라는 Key에 대응되는 Value를 return한다. 만약 x라는 Key가 없다면 default 값을 return 한다.
   >
   > 두 번째 문자열을 계산할 때는 만들어 둔 counter 딕셔너리에서 키에 해당하는 값을 하나씩 빼준다.
   >
   > ```python
   > for s in str2:
   >         counter[s] = counter.get(s, 0) - 1
   > ```
   >
   > 마지막으로 counter의 값들이 0이라면 True, 아니라면 False를 return한다.
   >
   > ```python
   > return all(c == 0 for c in counter.values())
   > ```

## 연결리스트 <-> 배열 변환하기

연결 리스트 클래스 LinkedList와, 그 노드 클래스 Node가 주어졌습니다.

연결 리스트 객체가 주어졌을때 이를 배열로 변환해서 반환하는 함수 toArray와, 배열이 주어졌을때 이를 연결 리스트로 변환해서 반환하는 함수 toLinkedList를 구현 해 봅시다.

```python
# 연결 리스트의 노드. 단일 연결 리스트의 경우입니다.
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        
    def __str__(self):
        return str(self.val)

# 연결 리스트 클래스. head 와 tail을 가지고 있으며, 가장 뒤에 새로운 노드를 추가하는 addToEnd 함수가 있습니다.
class LinkedList:
    def __init__(self, head):
        self.head = head
        self.tail = head
    
    def addToEnd(self, node):
        self.tail.next = node
        self.tail = node
        
    def __str__(self):
        node = self.head
        toPrint = []
        while node:
            toPrint.append(str(node.val))
            node = node.next
        return "->".join(toPrint)

####################################################################################################################################

# 주어진 연결 리스트 ll을 배열로 변환해 봅시다.
# 이때 연결 리스트 LinkedList의 객체가 입력으로 주어진다고 가정합니다.
def toArray(llNode):
    arr = []
    node = llNode.head
    while node:
        arr.append(node.val)
        node = node.next
    return arr


# 주어진 배열을 연결 리스트로 변환 해 봅시다.
def toLinkedList(lst):
    ll = LinkedList(Node(lst[0]))
    for l in lst[1:]:
        ll.addToEnd(Node(l))
    return ll

def example():
    ## Linkedlist 클래스와 Node 클래스를 사용하는 예시입니다.
    ll = LinkedList(Node(3))
    ll.addToEnd(Node(4))
    ll.addToEnd(Node(8))
    print(ll) 
    print(ll.head)
    print(ll.tail)

def main():
    example()
    nums = [2,8,19,37,4,5]
    ll = toLinkedList(nums)
    print(ll)
    lst = toArray(ll)
    print(lst)

if __name__ == "__main__":
    main()
    
    
'''
> 실행 결과

3->4->8
3
8
2->8->19->37->4->5
[2, 8, 19, 37, 4, 5]
'''
```



## 연결 리스트에서 노드 삭제하기

연결 리스트가 주어지고, 이 연결리스트에서 삭제하고 싶은 노드의 값이 주어졌다고 해 봅시다.

연결 리스트를 순회하면서 해당 노드를 찾아서, 삭제하는 함수를 만들어 봅시다.

주어진 연결 리스트에서 직접 삭제를 시행하면 되기 때문에, 해당 연결 리스트를 반환 할 필요는 없습니다.

> 문제 조건 -> 연결리스트에는 중복된 수가 없습니다.

```python
# 연결 리스트의 노드. 단일 연결 리스트의 경우입니다.
class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        
    def __str__(self):
        return str(self.val)
        

# 연결 리스트 클래스. head 와 tail을 가지고 있으며, 가장 뒤에 새로운 노드를 추가하는 addToEnd 함수가 있습니다.
class LinkedList:
    def __init__(self, head):
        self.head = head
        self.tail = head
    
    def addToEnd(self, node):
        self.tail.next = node
        self.tail = node
        
    def __str__(self):
        node = self.head
        toPrint = []
        while node:
            toPrint.append(str(node.val))
            node = node.next
        return "->".join(toPrint)


# 주어진 배열을 linkedlist로 변환해서 돌려줍니다. 실습 3-1을 참조하세요
def toLinkedList(lst):
    ll = LinkedList(Node(lst[0]))
    for i in range(1, len(lst)):
        ll.addToEnd(Node(lst[i]))
    
    return ll
    
####################################################################################################################################

def deleteNode(ll, valToDelete):
    # 노드가 아예 없을 때
    if ll.head is None:
        return None

    # 처음 노드를 삭제할 때
    if ll.head.val == valToDelete:
        ll.head = ll.head.next
        return None
    
    # 중간 또는 마지막 노드를 삭제할 때
    now = ll.head
    next_node = now.next
    while next_node:
        if next_node.val == valToDelete:
            now.next = next_node.next

            # 마지막 노드를 삭제할 때
            if next_node == ll.tail:    
                ll.tail = now

            break
            
        now = next_node
        next_node = now.next
    return None



def main():
    nums = [2,8,19,37,4,5]
    ll = toLinkedList(nums)
    print(ll)
    deleteNode(ll, 2)
    print(ll) # 19를 삭제하였으므로, 2->8->37->4->5
    deleteNode(ll, 3)
    print(ll) # 3이 없으므로, 2->8->37->4->5

if __name__ == "__main__":
    main()
```

## 괄호 매칭

`(`, `)`, `{`, `}`, `<`, `>`, `[`, `]` 의 여덟개의 문자로만 구성된 문자열이 입력으로 주어진다고 해 봅시다.

이때, 이 문자열이 유효한지를 확인하는 함수를 작성 해 보세요.

열린 괄호들이 닫히는 순서가 올바르게 되어 있는 경우에 그 문자열을 유효하다고 합니다.

즉, `({()})` 나 `[]<>{}` 등은 유효한 문자열이며, `)(` `<]` `<(>)` 등은 유효하지 않은 문자열입니다.

### 풀이

```python
def isParenthesisValid(example):
    st = []
    lefts = ['(', '{', '[', '<']
    rights = [')', '}', ']', '>']
    left_right = {}
    for left, right in zip(lefts, rights):
        left_right[left] = right
        
    for ex in example:
        if ex in lefts:
            st.append(ex)
        else:
            if not st: return False
            
            left = st.pop()
            right = left_right[left]
            if ex != right:
                return False
    if st: return False
    return True

def main():
    examples = ["({()})", "[]<>{}", ")(" "<]", "<(>)"]
    for example in examples:
        print(example, isParenthesisValid(example))

    
if __name__ == "__main__":
    main()
```

## 스트리밍 데이터의 이동 평균

정수 데이터가 스트리밍으로 (한번에 하나씩) 주어진다고 합시다. 이때, 주어진 범위 만큼의 이동 평균을 구하는 클래스 MovingAvg를 만들어 봅시다.

MovingAvg는 처음에 이동 평균의 범위를 입력받아서 초기화 되며, 매 정수 데이타가 입력되는 nextVal(num)함수는 이때까지의 이동 평균을 반환합니다.

예를 들어서, `2,8,19,37,4,5` 의 순서로 데이터가 입력되고, 이동 평균의 범위는 3이라고 합시다. 이 경우 다음과 같이 MovingAvg가 사용 될 것입니다.

```python
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
```

### 풀이

```python
import queue

class MovingAvg():
    def __init__(self, size):
        self.q = queue.Queue()
        self.size = size
        self.sum = 0
        
    def nextVal(self, num):
        
        if self.q.qsize() >= self.size:
            self.sum -= self.q.get()
            
        self.q.put(num)
        self.sum += num
        return self.sum / self.q.qsize()
    
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
```



## quick sort

입력으로 n*n*개의 수가 주어지면, quick sort를 구현하는 프로그램을 작성하세요.

#### 입력 예시

```
10 2 3 4 5 6 9 7 8 1 
Copy
```

#### 출력 예시

```
1 2 3 4 5 6 7 8 9 10
```

###  풀이

```python
def quickSort(data):
    '''
    퀵정렬을 통해 오름차순으로 정렬된 array를 반환하는 함수를 작성하세요.
    '''
    if len(data) <= 1:
        return data
        
    pivot = data[0]
    left = [n for n in data[1:] if n < pivot]
    right = [n for n in data[1:] if n >= pivot]
    
    return quickSort(left) + [pivot] + quickSort(right)

def main():
    line = [int(x) for x in input().split()]

    print(*quickSort(line))

if __name__ == "__main__":
    main()

```

## 이진트리 전위, 중위, 후위 순회 구현하기

이번 예제에서는 이진트리를 후위 순회하는 프로그램을 작성합니다.

주어진 이진트리를 후위순회 한 결과를 출력하세요.

### 입력값

**첫 번째 줄에** 노드의 개수 `n`이 주어집니다.

**두 번째 줄부터 n줄에 걸쳐** `a` `b` `c`가 주어집니다.

정점 `a`가 왼쪽 자식으로 `b`, 오른쪽 자식으로 `c`를 갖는다는 의미입니다. 만약 노드의 자식 노드가 없다면 **-1**이 주어집니다.

### 결과값

**첫 번째 줄에** 후위순회 한 결과를 출력합니다.

## 테스트 예제

### [입력 예시]

```
5
1 2 3
2 4 5
3 -1 -1
4 -1 -1
5 -1 -1
Copy
```

### [출력 예시]

```
4 5 2 3 1
```

### 풀이

```python
class Tree:
    def __init__(self, i, l, r) :
        self.index = i
        self.left = l
        self.right = r
        
    def addNode(self, i, l, r) :
        # i로 트리를 build up 할 수 있다면
        if self.index == None or self.index == i :
            self.index = i
            self.left = Tree(l, None, None) if l != None else None
            self.right = Tree(r, None, None) if r != None else None

            return True
            
        # 할 수 없다면
        else :
            build_possible = False # 트리 build up 가능 여부
            
            # left에 요소가 있다면,
            # addNode 재귀함수를 돌린다
            # left를 끝까지 찾아도 i를 발견 못하면 build 할 수 없다
            if self.left != None :
                build_possible = self.left.addNode(i, l, r)
            
            # left에서는 build 할 수 없어 right에서 하려 했지만 
            # right에 요소가 있다면,
            # 마찬가지로 i를 찾기 위해 addNode 재귀함수를 돌린다
            # 끝까지 찾지 못하면 return False된다 
            if build_possible == False and self.right != None :
                build_possible = self.right.addNode(i, l, r)

            return build_possible # 트리 build up 결과


def preorder(tree) :
    '''
    tree를 전위순회 하여 리스트로 반환하는 함수를 작성하세요.
    '''
    if tree is None:
        return []
        
    return [tree.index] + preorder(tree.left) + preorder(tree.right)



def inorder(tree) :
    '''
    tree를 중위순회 하여 리스트로 반환하는 함수를 작성하세요.
    '''
    if tree is None:
        return []

    return inorder(tree.left) + [tree.index] + inorder(tree.right)


def postorder(tree) :
    '''
    tree를 후위순회 하여 리스트로 반환하는 함수를 작성하세요.
    '''
    if tree is None:
        return []

    return postorder(tree.left) + postorder(tree.right) + [tree.index]
    

def main():
    myTree = Tree(None, None, None)

    n = int(input())

    for _ in range(n) :
        myList = [int(v) for v in input().split()]

        if myList[1] == -1 :
            myList[1] = None

        if myList[2] == -1 :
            myList[2] = None

        myTree.addNode(myList[0], myList[1], myList[2])

    print(*preorder(myTree))
    print(*inorder(myTree))
    print(*postorder(myTree))


if __name__ == "__main__":
    main()

```

## 이진 탐색 알고리즘

기본적인 이진 탐색 알고리즘

```python
def binary_search(nums, num):
	# nums : 주어진 정수들을 담은 리스트
	# num : 내가 찾고 싶은 숫자
	start = 0  # 내가 찾고자 하는 범위의 제일 왼쪽
	end = len(nums) - 1  # 내가 찾고자 하는 범위의 제일 오른쪽
	while start <= end:
		mid = (start + end) // 2
		
		if nums[mid] == num:
			return mid
        elif nums[mid] < num:
        	start = mid + 1
        else:
        	end = mid - 1
    return start	
```

## 합병 정렬 알고리즘

기본적인 합병 정렬 알고리즘

```python
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
        if left[lx] < right[rx]:
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


# 출력용======================================================
def mergeSort(nums) :
    # 나누는
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    print(nums)
    print('divide!!!')
    left = mergeSort(nums[:mid]) # 정렬된 리스트들
    right = mergeSort(nums[mid:]) # 정렬된 리스트들
    print(left, right)
    # 합치자!
    sorted_list = merge(left, right) # 정렬된 리스트들을 합쳐준것
    print('sorted_list :',sorted_list)
    
    return sorted_list

def merge(left, right):
    l = 0
    r = 0
    sorted_list = []
    while l < len(left) and r < len(right):
        if left[l] > right[r]:
            sorted_list.append(left[l])
            l += 1
        else:
            sorted_list.append(right[r])
            r += 1
    while l < len(left):
        sorted_list.append(left[l])
        l += 1
    while r < len(right):
        sorted_list.append(right[r])
        r += 1
    return sorted_list
    
            
# [8, 6, 4, 3, 2, 1]이 출력되어야 합니다.
print(mergeSort([1, 6, 3, 8, 2, 4, 5, 7]))

# [9, 7, 4, 3, 2, 1]가 출력되어야 합니다.
print(mergeSort([7, 2, 4, 1, 9, 3, 1, 3]))
```

## 줄 세우기

### 문제

```
줄 세우기

엘리스 초등학교에서는 합창 대회에 출전하기 위한 학생 n명을 선발중이다. 
합창 대회에 나가게 되면, n명의 학생이 모두 한 눈에 보일 수 있게끔 좌우로 한 줄로 서서 노래를 부르게 된다.
엘리스 초등학교의 남학생끼리는 사이가 별로 좋지 않기 때문에 바로 옆에 서는 것을 싫어한다. 
즉, 남학생의 좌우에는 항상 여학생이 서 있어야 남학생들끼리 싸우는 것을 막을 수 있다. 
예를 들어, P를 남학생, Q를 여학생이라고 한다면 아래와 같은 배치는 가능하다.

P Q Q P Q
Q Q Q Q Q

하지만 아래와 같은 배치는 불가능하다

P P Q Q Q
P Q Q P P

n 명의 학생을 선발하려 하고, 남학생과 여학생은 충분히 많다고 하자. n명의 학생을 배치하는 경우의 수를 구하는 프로그램을 작성하시오. 단, 그 경우의 수가 매우 커질 수 있으므로, 경우의 수를 1,000,000,007로 나눈 나머지를 출력한다

실습
입력
합창 대표 학생의 수 n이 주어진다. (1 ≤ n ≤ 100)

출력
학생 대표를 일렬로 세우는 경우의 수를 1,000,000,007로 나눈 나머지를 출력한다.

입력 예시
5
출력 예시
13
예제 설명
아래와 같이 13가지의 경우가 있다.

Q Q Q Q Q
Q Q Q Q P
Q Q Q P Q
Q Q P Q Q
Q P Q Q Q
P Q Q Q Q
Q Q P Q P
Q P Q Q P
P Q Q Q P
Q P Q P Q
P Q Q P Q
P Q P Q Q
P Q P Q P
```

### 풀이(DP)

```python
def lining(n) :
    '''
    n명의 학생을 일렬로 줄세우는 경우의 수를 1,000,000,007 로 나눈 나머지를 반환하는 함수를 작성하세요.
    '''
    divide = 1000000007
    dp_Q = [0,1,2]
    dp_P = [0,1,1]
    for i in range(3, n+1):
        dp_Q.append((dp_Q[i-1] + dp_P[i-1]) % divide)
        dp_P.append(dp_Q[i-1])

    return (dp_Q[n] + dp_P[n]) % divide
```



<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**