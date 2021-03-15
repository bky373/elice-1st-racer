'''
최소신장트리

그래프가 주어질 때, 그 최소 신장 트리의 간선 가중치의 합을 출력하는 프로그램을 작성하세요.

실습
입력
첫째 줄에는 정점의 개수, 간선의 개수가 주어집니다.
둘째 줄부터 간선의 정보가 주어집니다. 
각 줄은 정수 a b c 로 구성되며, 이는 a와 b사이에 가중치 c인 간선이 존재한다는 의미입니다.

출력
최소 신장 트리의 간선 가중치의 합을 출력합니다.

입력 예시
8 11
0 1 3
0 5 1
1 2 4
1 3 1
1 5 1
2 4 6
2 6 9
2 7 4
3 4 2
4 6 9
6 7 3
출력 예시
16
'''


import sys
sys.setrecursionlimit(100000)

def union_is_same_group(parent, a, b):
    pa = find(parent, a)
    pb = find(parent, b)
    
    if pa == pb:
        return True
    else:
        parent[pb] = pa
        return False


def find(parent, a):
    if parent[a] == a:
        return a
    else:
        return find(parent, parent[a])


def getMST(graph) :
    '''
    graph가 주어질 때, 그 최소 비용 신장트리의 간선 가중치의 합을 반환하는 함수를 작성하세요.
    '''

    edges = []
    n = len(graph)
    
    for i in range(n):
        for j in range(len(graph[i])):
            neighbor = graph[i][j][0]
            cost = graph[i][j][1]
            
            edges.append([i, neighbor, cost])
            
    def getKey(a):
        return a[2]
        
    edges.sort(key=getKey)
    
    m = len(edges)
    
    parent = [i for i in range(n)]
    
    result = 0
    for i in range(m):
        v1 = edges[i][0]
        v2 = edges[i][1]
        cost = edges[i][2]
        
        v1_parent = find(parent, v1)
        v2_parent = find(parent, v2)
        
        if union_is_same_group(parent, v1_parent, v2_parent) == False:
            result += cost
        
    return result



def main():
    '''
    Do not change this code
    '''

    line = [int(x) for x in input().split()]

    n = line[0]
    m = line[1]

    graph = [ [] for i in range(n) ]

    for i in range(m) :
        line = [int(x) for x in input().split()]

        graph[line[0]].append((line[1], line[2]))
        graph[line[1]].append((line[0], line[2]))

    print(getMST(graph))

if __name__ == "__main__":
    main()
