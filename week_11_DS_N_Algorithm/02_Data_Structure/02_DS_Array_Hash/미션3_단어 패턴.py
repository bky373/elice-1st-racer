'''
단어 패턴

문자열(패턴) 하나와 문자열의 배열 하나가 주어집니다.
패턴 문자열의 각각의 문자 하나는, 두번째 문자열 배열의 각각의 문자열 하나에 대응 될 수 있습니다.
해당 배열이 해당 패턴으로 표현 되는지 아닌지의 여부를 확인하는 함수를 만들어 보세요.
예를 들어서, aabb 와 ['elice', 'elice', 'alice', 'alice'] 가 주어졌을 경우에는 함수가 True를 반환해야 합니다. 
이 경우에는 a가 elice에, b가 alice에 대응되도록 하면 배열을 해당 패턴으로 표현 하는 것이 가능하기 때문이죠.
반면, aabb 와 ['elice', 'alice', 'elice', 'alice'] 가 주어졌을 경우에는 함수가 False를 반환해야 합니다.
모든 문자는 영어 소문자라고 가정합니다.
'''


def wordPattern(pattern, strList):
    match = {}
    for i in range(len(pattern)):
        if pattern[i] not in match:
            match[pattern[i]] = strList[i]
            continue

        if match[pattern[i]] != strList[i]:
            return False
    return True

def main():
    print(wordPattern("aabb", ["elice", "elice", "alice", "alice"])) # should return True
    print(wordPattern("abab", ["elice", "elice", "alice", "alice"])) # should return False
    

if __name__ == "__main__":
    main()
