'''
최단거리

그래프와 시작점, 도착점이 주어질 때 시작점에서 도착점까지 가는 최단거리를 출력하는 프로그램을 작성하세요.

실습
입력
첫째 줄에는 정점의 개수, 간선의 개수, 시작점의 정점 번호, 그리고 도착점의 정점 번호가 주어집니다.
둘째 줄부터 간선의 정보가 주어집니다. 각 줄은 정수 a b c 로 구성되며, 이는 a와 b사이에 가중치 c인 간선이 존재한다는 의미입니다.

출력
시작점에서 도착점까지의 최단거리를 출력합니다.

입력 예시
8 11 0 6
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
13
'''


import sys
sys.setrecursionlimit(100000)

def getShortest(graph, start, end) :
    '''
    graph가 주어질 때, start부터 end까지의 최단거리를 반환하는 함수를 작성하세요.
    '''
    v = len(graph)
    
    dist = [float('inf') for i in range(v)]
    visited = [False for i in range(v)]
    
    dist[start] = 0
    
    while True:
        mini = float('inf')
        node = -1
        for j in range(v):
            if not visited[j] and dist[j] < mini:
                mini = dist[j]
                node = j
                
        if mini == float('inf'):
            break
            
        visited[node] = True
    
        for j in range(len(graph[node])):
            des = graph[node][j][0]
            cost = graph[node][j][1]
            
            if dist[des] > dist[node] + cost:
                dist[des] = dist[node] + cost
            
    return dist[end]


def main():
    '''
    Do not change this code
    '''

    line = [int(x) for x in input().split()]

    n = line[0]
    m = line[1]
    start = line[2]
    end = line[3]

    graph = [ [] for i in range(n) ]

    for i in range(m) :
        line = [int(x) for x in input().split()]

        graph[line[0]].append((line[1], line[2]))
        graph[line[1]].append((line[0], line[2]))

    print(getShortest(graph, start, end))

if __name__ == "__main__":
    main()
