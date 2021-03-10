'''
아나그램 탐지

아나그램(Anagram)은 한 문자열의 문자를 재배열해서 다른 뜻을 가지는 다른 단어로 바꾸는 것을 의미합니다.
두 개의 문자열이 주어졌을 때, 서로가 서로의 아나그램인지 아닌지의 여부를 탐지하는 함수를 만들어 보세요.
elice 와 leice 는 아나그램입니다. True를 리턴해야 합니다.
cat 과 cap 는 아나그램이 아닙니다. False 를 리턴해야 합니다.
iamlordvoldemort 와 tommarvoloriddle 은 아나그램입니다. True를 리턴해야 합니다.
문자열의 모든 문자는 영어 소문자라고 가정합시다.
'''


def isAnagram(str1, str2):
    counter = {}
    for s in str1:
        counter[s] = counter.get(s, 0) + 1
    for s in str2:
        counter[s] = counter.get(s, 0) - 1
    return all(c == 0 for c in counter.values())

def main():
    print(isAnagram('iamlordvoldemort', 'tommarvoloriddle')) # should return True
    print(isAnagram('cat', 'cap')) #should return False
    

if __name__ == "__main__":
    main()
