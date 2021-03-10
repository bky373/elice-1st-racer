# **자료구조 & 알고리즘 학습 정리 IIII**

## 재귀 함수

프로그램의 핵심: **되풀이** -> **반복(Iteration)**과 **재귀(Recursion)**<br>비슷한 일을 여러번 되풀이해서 풀어내기

```python
def doSomething(nums):
	sum = 0
	for num in nums:
		sum = sum + num  # sum = sum + num의 반복!
    return sum
```

## 재귀(Recursion)

스스로를 호출하는 방식의 반복법

> 어떤 주어진 일(Task)이 **같은 과정**을 필요로 하지만<br>**더 범위가 작은 일(Sub Task)**들로 나눠질 수 있다면,<br>재귀를 적용할 수 있다.
>
> cf) 반복(Iteration) : for, while 등을 사용한 되풀이법

언젠가는 끝이 나야하므로 식의 **종료 조건**이 필요하다.<br>= **Base 조건** ( ex. f(0) = 1, f(1) = 2 ... )

### 대표적인 예 

> 팩토리얼 계산
>
> ```python
> factorial(n) = n * factorial(n-1)
> ```

## 동적 프로그래밍

Dynamic Programming

> **재귀 + 정보 저장(메모이제이션)**

한 부분 문제를 한 번 계산했다면, 다시 계산할 필요가 없도록!<br>-> 저장 값을 다른 자료 구조에 저장

## 트리

나무 형태의 자료구조

### 부모와 자식

>  부모 노드 -> 자식 노드 방향으로 연결이 존재

### 루트와 리프

>  **루트(root)** : 부모가 없는 노드
>
> **리프(leaf)** : 자식이 없는 노드

### 트리의 깊이

> **루트에서 리프까지**의 **경로 길이**, **Depth**

## 트리의 특성

> 1. **루트는 하나**
> 2. **방향성 존재**
> 3. **순환 구조가 없음**

## 이진 트리

> 모든 노드가 **최대 2개의 자식 노드**를 가지는 트리 (0개 가능)

![image](https://user-images.githubusercontent.com/49539592/110600265-183c1d80-81c7-11eb-9bc5-b40c8341819a.png)

### 완전/포화 이진 트리

> **완전 이진 트리(Complete Binary Tree)**: 마지막 레벨을 제외한 모든 레벨의  자식 node가 완전히 채워져 있고, 마지막 레벨의 node들은 가능한 한 왼쪽부터 채워져 있는 구조 [참고](https://medium.com/@dltkddud4403/%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%AC%EA%B0%80-%EC%99%84%EC%A0%84-%EC%9D%B4%EC%A7%84-%ED%8A%B8%EB%A6%AC%EC%9D%B8%EC%A7%80-%ED%99%95%EC%9D%B8%ED%95%98%EB%8A%94-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-615ddc78f39c)
>
> **포화 이진 트리(Full Binary Tree)** :  마지막 레벨을 제외한 모든 레벨의 자식 node가 2개일 경우 

![image](https://user-images.githubusercontent.com/49539592/110600340-2d18b100-81c7-11eb-8596-49848c24357b.png)

## 이진 탐색 트리

> **Binary Search Tree, BST**

![image](https://user-images.githubusercontent.com/49539592/110601106-f1cab200-81c7-11eb-8552-c81ebdb91775.png)

### 트리 문제의 핵심 = 탐색

노드가 주어졌을 때 트리를 구석구석 훑어가며 원하는 목적을 달성하는 것!<br>**반복** 또는 **재귀**를 활용한다!

## 너비 우선 탐색 (BFS)

> **Breadth First Search** : **반복 기반**의 탐색<br>**횡적**으로 한 층씩 탐색하는 방식이다.
>
> ```python
> def BFS(root):
> 	q = queue.Queue()
> 	q = put(root)
> 	while q.qsize() > 0:
> 		node - q.get()
> 		if node:
> 		   // doSomething
> 		q.put(node.left)
> 		q.put(node.right)
> ```

## 깊이 우선 탐색 (DFS)

>**Depth First Search** : **재귀 기반**의 탐색<br>가장 **깊은 곳**까지 내려갔다가 오는 방식의 탐색
>
>```python
>def DFS(node):
>	// doSomething
>	if node == 리프노드:
>		doSomething
>		return
>    DFS(node.left)
>    DFS(node.right)
>```

<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**