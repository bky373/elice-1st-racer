# **자료구조 & 알고리즘 학습 정리 III**

## 연결 리스트

링크드 리스트 Linked List<br>여러 개의 노드들이 한 줄로 연결되어 있는 자료구조

> **노드** = **저장할 데이터** + **다음 노드로의 연결**

head와 tail 노드를 가지고 있다

### 단순 연결리스트

**한 방향**으로만 이어진 연결 리스트

![image](https://user-images.githubusercontent.com/49539592/110590958-d0fc5f80-81bb-11eb-8681-863a377ef64c.png)

### 이중 연결 리스트

**양쪽 방향**으로 이어진 연결 리스트

![image](https://user-images.githubusercontent.com/49539592/110591066-f4bfa580-81bb-11eb-82d6-b58e27dbeae3.png)

### 원형 연결 리스트

**가장 뒤의 노드**가 **맨 앞의 노드**에 연결된 연결 리스트

![image](https://user-images.githubusercontent.com/49539592/110591196-1a4caf00-81bc-11eb-9f5a-f84822fbef61.png)

### 기타 연결 리스트

**아무 형태**의 연결 리스트 모두 가능!

![image](https://user-images.githubusercontent.com/49539592/110591317-436d3f80-81bc-11eb-8de5-beca9182edb2.png)

## 배열 vs 연결 리스트

### 배열

**인덱스** 이용해서 데이터 접근

### 연결 리스트

**현재 노드에서 연결된 노드로**만

## 연결 리스트 시간 복잡도

### 자료 중간에 추가/삭제 : O(1)

이 경우, 배열에 비해 연결리스트의 효율성이 더 좋다.

![image](https://user-images.githubusercontent.com/49539592/110591716-c1314b00-81bc-11eb-821b-0b8463875b11.png)

## 큐(Queue)

먼저 줄 선 사람이 먼저 나간다 (줄 서기)

> FIRST IN FIRST OUT (FIFO)

![image](https://user-images.githubusercontent.com/49539592/110593955-9268a400-81bf-11eb-80b0-b00b82c43a35.png)

## 큐 시간 복잡도

### 입력하기, 출력하기 모두 : O(1)

![image](https://user-images.githubusercontent.com/49539592/110594193-d65ba900-81bf-11eb-964a-1a81021311e1.png)



### 큐 in Python

```python
# 1 - queue 라이브러리 활용

import queue

q = queue.Queue()
q.put(2)
q.put(8)
q.get()  # 2를 반환


# 2 - 배열 활용
# 이 경우 문제점은 비효율적인 시간 복잡도 O(N)
q = [8, 19, 37, 4, 5]

q.insert(0, 2)  # 맨 앞에 입력한다
q.pop()  # 맨 뒤에서 가져온다

```

## 스택(Stack)

나중에 줄 선 사람이 먼저 나간다 (프링글스 칩)

> LAST IN FIRST OUT (LIFO)

![image](https://user-images.githubusercontent.com/49539592/110595522-7108b780-81c1-11eb-9120-8214c576988a.png)

## 스택 시간 복잡도

### 입력하기, 출력하기 모두 : O(1)

![image](https://user-images.githubusercontent.com/49539592/110595777-cfce3100-81c1-11eb-8c18-6f7c7479bd35.png)

### 스택 in Python

```python
# 배열을 스택으로 활용

stack = []
stack.append(2)
stack.append(5)
stack.pop()  # 5를 반환
```





<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**