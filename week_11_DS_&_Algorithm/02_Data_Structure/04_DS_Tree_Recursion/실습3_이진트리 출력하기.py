import queue

#====이 문제를 풀기 위해 필요한 클래스와 함수들입니다. 따로 수정 할 필요는 없습니다.


class Node():
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


def listToCompleteBinaryTree(lst):
    def helper(index):
        if index >= len(lst):
            return None
        node = Node(lst[index])
        node.left = helper(index * 2 + 1)
        node.right = helper(index * 2 + 2)
        return node
    return helper(0)

#=================================================================================


def printTree(node):
    all_lines = []
    same_levels = []  # 같은 레벨의 노드들

    q = queue.Queue()
    q.put(node)
    q.put(Node(-1))  # 레벨 구분자 역할

    while q.qsize() > 0:
        now = q.get()

        if not now:  # None인 경우 pass하여 다음 노드 탐색
            continue
        elif now.val == -1:  # 레벨 구분자를 만났을 때
            if q.qsize() > 0:
                all_lines.append(same_levels)  # 레벨 노드 뭉치를 더해준다
                same_levels = []  # 레벨 노드 초기화
                q.put(Node(-1))   # 레벨 구분자 재삽입
        else:
            same_levels.append(now.val)  # 현재 노드 값을 레벨 노드에 삽입
            q.put(now.left)
            q.put(now.right)

    return all_lines


def main():
    node = listToCompleteBinaryTree([1, 2, 3, 4, 5, 6, 7])
    print(printTree(node))  # [[1], [2, 3], [4, 5, 6, 7]]


if __name__ == "__main__":
    main()
