## 디버깅(Debugging) 학습내용 정리

### 버그(Bug)

- **버그**란? *코드가 원하는 대로 동작하지 않는* 모든 경우
  - 프로그램이 **죽는** (크래시가 발생하는) 경우
  - 예상한 속도보다 훨씬 **느리게** 동작하는 경우
  - **잘못된** 결과를 출력하는 경우
  - 코드 설계 상 **일어나면 안 되는** 상황이 일어난 경우

### 예외(Exception)

- **예외**란? *일반적이지 않은* 코드의 동작
  - 사용자가 프로그램을 **강제 종료**하는 경우
  - **분수의 분모에 0**이 들어가는 경우
  - 열고자 하는 **파일이 존재하지 않는** 경우
  - **인터넷이 불안정한** 경우
- 예외는 프로그래밍 언어 또는 운영체제에 따라 다를 수 있다
- 처리되지 않은 예외는 **버그**를 만들 수 있다 -> 개발자는 사용자의 다양한 상황을 예측해야 한다
  - (예) 사진 업로드 중에 배터리가 없어 핸드폰이 꺼진다면?

### 디버깅(Debugging)

- **디버깅**이란? 사용/테스트 중 찾아낸 **버그를 없애 나가는 과정**
  - 버그의 **원인**을 찾고
  - 발생한 버그를 **해결**하고
  - 비슷한 버그의 **재발을 방지**하는 것

1. **버그의 원인 찾기**
   - 어떤 **상황**에서, 어떤 조작을 했을 때 일어나는가?
   - 얼마나 잦은 **빈도**로 발생하는가?
   - 에러 **메시지**가 뜬다면 내용이 무엇인가?

2. **발생한 버그 해결하기**
   - 버그가 발생한 **원인**을 해결하려면 어떻게 해야 하는가?
   - **새로운 코드**가 일으킬 새로운 버그는 없는가?
3. **버그 재발 방지하기**
   - 버그를 일으킨 코드가 **다른 곳**에서 사용되는가?
   - **비슷한 설계**를 이용한 다른 코드는 없는가?
   - 고친 코드의 **약점**은 없는가?
   - 코드를 지속적으로 **검증**할 방법은 무엇인가?

### 에러 메시지 읽기

예)

```python
// main.py
1 def greeting(your_name):
2    print("Hello, " + yourname + "!")
3 
4 greeting("Donald Trump")


// Error Message
1 Traceback (most recent call last):
2   File "main.py", line 4, in <module>
3	  greeting("Donald Trump")
4   File "main.py", line 2, in greeting
5     print("Hello", yourname + "!")
6 NameErrror: name 'yourname' is not defined
```

##### 에러 메시지 해석

**1번째 줄** : 최근 호출된 함수(most recent call)는 가장 마지막(last)에 있다

**2번째 줄** : `main.py` 파일에서 에러 발생,  `<module>`은 어떤 함수에도 속하지 않은 가장 외부에서 실행된 코드를 의미(`main.py`의 4번째줄`greeting("Donald Trump")`를 불러주는 코드는 어떤 함수에 속해있지 않고 파이썬 파일의 가장 바깥쪽에 존재하고 있다) 

**3번째 줄** : 이 함수에서 에러 시작

**4번째 줄** : `main.py`의 line 2 `greeing` 함수에서 에러 발생

**5번째 줄** :  `print("Hello", yourname + "!")`, 이 다음 내용이 호출되지 않음 -> 이 줄에서 결정적인 에러가 발생

**6번째 줄** :   에러 종류(NameError)와 발생 이유를 설명해줌, 여기서는 yourname이 not defined(정해지지 않았다)라고 해석됨



### 테스트 코드 짜기

- 왜 테스트 코드가 필요할까?
  - 코드가 **설계된 대로** 작동하는지 알 수 있다
  - 코드를 **수정한 후에도 동일하게** 작동하는지 알 수 있다

#### 유닛 테스트

- **유닛 테스트**란?  **Unit**(가장 작은 단위= *함수 1개*) Test

  - 즉, 주어진 **입력**(인자)에 대해 예상된 **출력**(리턴 값)을 내놓는지를 확인

  - (예) `is_palindrome` 함수가 있다는 전제 하에

    ```python
    def test_is_palindrome_level():
    	assert(is_palindrome("level") == True)
    
    def test_is_palindrome_lever():
        assert(is_palindrome("level") == False)
        
    def test_is_palindrome_empty():
        assert(is_palindrome(""))  # ?? 빈 문자열은 palindrome인가? 설계에 따라 다름
        
    def test_is_palindrome_sentence():
        assert(is_palindrome("Mr. Owl ate my metal worm"))  # ??
    ```

    assert문이 에러 없이 모두 통과했다면 테스트 통과

    테스트를 하나라도 통과하지 않는다면 기존에 짠 코드 확인

- 테스트 작성을 어떻게 작성하느냐에 따라 어떤 출력을 의도하는지가 결정된다. 즉,  **테스트 == 설계**

#### 유닛 테스트의 조건

 	1. **읽기 쉽다**
 	2. **독립적이다**
 	3. **충분히 작다**
 	4. **충분히 넓다** : 들어올 수 있는 **다양한 입력들**을 충분히 고려해야 한다 (**edge case** 고려)



### 파이썬의 unittest

```python
import unittest

class IsPalindromeTests(unittest.TestCase):
    def test_level(self):
        self.assertTrue(is_palindrome("level"))
    def test_lever(self):
        self.assertTrue(is_palindrome("lever"))
        
        

# 유닛테스트 실행
unittest.main()



# 결과
test_level (__main__.IsPalindromeTests) ... ok
test_lever (__main__.IsPalindromeTests) ... ok
---------------------------------------
Ran 2 test in 0.000s
OK
        
```



<br/>

---

※ 엘리스가 제공한 학습 자료, 콘텐츠의 저작권은 엘리스에 있습니다. <br>

***\*※ COPYRIGHT 2016-2021. ELICE ALL RIGHTS RESERVED.\****

