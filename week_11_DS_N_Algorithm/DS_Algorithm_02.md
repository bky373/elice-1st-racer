# **자료구조 & 알고리즘 학습 정리 II**

## 배열

가장 기본적인 자료 구조 <br>
배열의 공간 복잡도는 배열의 크기만큼 차지한다. -> O(N)

```python
nums = [1, 2, 3, 4, 5]
```

## 배열: Big-O 시간 복잡도

### 인덱스를 알 때 : O(1) 

> nums[i] 의 경우

```python
nums = [1, 2, 3, 4, 5, 6]
nums[2] = 3
```

### 인덱스를 모를 때 = 하나씩 검사 : O(N)

```python
nums = [1, 2, 3, 4, 5, 6]
if 5 in nums:
```

### 배열 전부 순회하기 : O(N)

```python
nums = [1, 2, 3, 4, 5, 6]
for num in nums:
```

### 자료 끝에 추가하기 : O(1)

```python
nums = [1, 2, 3, 4, 5, 6]
nums.append(7)
```

### 자료 중간에 추가하기 : O(N)

```python
nums = [1, 2, 3, 4, 5, 6]
nums.insert(3, 9)  # (index, value to insert)
```

## 해쉬

Dicitionary.**Key + Value** 의 조합 (in Python) <br>즉, Key에 Value를 저장하는 자료구조 <br>**Key는 중복될 수 없음** <br>**공간 복잡도는 대략 O(N)** <br>해쉬는 데이터가 입력되어 있지 않은 **여유 공간**이 많아야 데이터 간 충돌을 방지하여 성능 유지

```python
stuedentIds = {
	"박지나" : 123,
	"송호준" : 145,
	"이주원" : 563
}
```

## 해쉬 : Big-O 시간 복잡도

### Key를 이용해서 Value 가져오기 : 대략 O(1)

```python
print(studenIds["박지나"])
```

### Key가 존재하는지 확인하기 : 대략 O(1)

```python
if "박지나" in studentIds:
if "손지윤" in studentIds:
```

### Key, Value 추가하기 : 대략 O(1)

```python
studentIds["손지윤"] = 777
```

### 해당 Key의 Value 변경하기 : 대략 O(1)

```python
studentIds["박지나"] = 555
```

## Set

**Value 없이 Key만** 있는 Dictionary <br>**Key는 중복될 수 없음**

```python
studentNames = {"박지나", "송호준", "이주원", "손지윤"}
```

## 배열과 해쉬의 trade-off

### 배열 vs 해쉬

시간 복잡도를 얻으려면 공간 복잡도를 내주거나, <br>공간 복잡도를 얻으려면 시간 복잡도를 내주어야 한다.

|                자료구조                 |          시간 복잡도           |           공간 복잡도            |
| :-------------------------------------: | :----------------------------: | :------------------------------: |
| **배열**<br />식별자(key)가 없는 데이터 | 크다<br />O(1), O(NlogN), O(N) |          작다<br />O(N)          |
| **해쉬**<br />식별자(key)가 있는 데이터 |        작다 <br />O(1)         | 크다<br />O(N) (효율적이지 못함) |

<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

**※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.**