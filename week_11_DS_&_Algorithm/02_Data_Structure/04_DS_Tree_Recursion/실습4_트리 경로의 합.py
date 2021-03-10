'''
트리의 경로의 합
완벽한 이진 트리가 주어졌다고 합시다. 그리고 어떤 합 숫자가 주어졌다고 합시다. 이때, 이 트리의 루트(root)에서부터 잎(leaf)까지의 가능한 경로들을 고려해서, 이 경로들 중 최소 하나 이상의 해당 경로상의 value들의 합산과 주어진 합 숫자가 일치하면 True를, 아니면 Fals를 반환하는 함수를 구현 해 봅시다.

예를 들어서,

 1
2 3
Copy
와 같은 트리가 주어지고 3 값이 주어진다면 1->2 경로의 합이 3이기 때문에 True를 반환하면 됩니다.

   1
 2   3
4 5 6  7
Copy
과 같은 트리가 주어지고 8이 주어진다면 1->2->5 경로의 합이 8이기 때문에 True를 반환하면 됩니다. 하지만 만약 15가 주어진다면 해당 트리의 어떤 경로도 합산이 15가 되지 않기 때문에 False를 반환하면 됩니다.

깊이 우선 탐색을 활용 해 봅시다.
'''

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

def printTree(node):
    q = [Node(-1), node]

    line = []
    while q:
        node = q.pop()
        if not node:
            continue
        elif node.val == -1:
            if len(line) > 0:
                print(" ".join(line))
                line = []
                q.insert(0,Node(-1))
        else:
            q.insert(0,node.left)
            q.insert(0,node.right)
            line.append(str(node.val))
#=================================================================================
def path_sum(node, targetSum):
    def dfsHelper(node, curSum):
        # 여기에 깊이 우선 탐색을 구현 해 봅시다.
        if node is None:  # 리프 노드일 때 합계가 타겟과 같은지 체크
            return curSum == targetSum
        
        curSum += node.val
        is_left = dfsHelper(node.left, curSum)
        is_right = dfsHelper(node.right, curSum)
        return is_left or is_right
        
    return dfsHelper(node, 0)
    
def main():
    node = listToCompleteBinaryTree([1,2,3,4,5,6,7])
    printTree(node)
    print(path_sum(node, 8)) # return True
    print(path_sum(node, 15)) # return False

if __name__ == "__main__":
    main()
    