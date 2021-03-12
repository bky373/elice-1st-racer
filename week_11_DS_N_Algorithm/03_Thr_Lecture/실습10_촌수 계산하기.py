'''
촌수 계산하기

새로운 SNS 서비스 엘리스친구는 두 명의 사용자 간의 거리를 촌수로 표시합니다. 
직접연결이 되어있는 친구라면 1촌, N명의 친구를 거쳐 연결되어있다면 N+1촌입니다. 
두 사용자 간의 촌수를 구하세요.

사용자간의 관계가 다음과 같을 때
엘리스 - 체셔
체셔 - 토끼
엘리스 - 하트여왕
모자장수 - 하트여왕
토끼 - 하트여왕

그래프로 다음과 같이 표현할 수 있습니다.
모자장수와 체셔는 3다리를 건너 연결되어있기 때문에 3촌입니다.

실습
입력
첫째 줄에는 사용자 수 (N)와 친구관계의 수 (M)가 주어집니다.
둘째 줄에는 촌수를 알고 싶은 두 사용자의 번호가 주어집니다. 각 사용자의 번호는 0이상 N미만입니다.
셋째 줄 부터 M개의 친구관계가 두 사용자의 번호로 주어집니다. 친구관계를 나타낼 때, a b는 b a와 동일한 관계입니다.

출력
두 사용자의 촌수를 출력합니다. 만약 친구관계가 아니라면 -1을 출력합니다

입력 예시 1
5 5
0 4
0 1
0 2
1 3
2 3
3 4
출력 예시 1
3
입력 예시 2
5 0
0 2
출력 예시 2
-1
'''


import sys
from collections import deque
sys.setrecursionlimit(100000)

def bfs(start, end, adj, tour, step):
    q = deque([start])
    tour[start] = 1
    
    while q:
        now = q.popleft()
        if now == end:
            return step[now]

        for nx in adj[now]:
            if not tour[nx]:
                tour[nx] = 1
                step[nx] = step[now] + 1
                q.append(nx)


def SNS(n_nodes, myInput, a, b):
    '''
    엘리스친구의 친구관계가 myInput으로 주어지고, 사용자 a, b가 주어질 때 둘 사이의 촌수를 반환합니다.
    '''
    adj = [[] for _ in range(n_nodes)]
    tour = [0] * n_nodes
    step = [0] * n_nodes

    for x, y in myInput:
        adj[x].append(y)
        adj[y].append(x)

    return bfs(a, b, adj, tour, step)


print(SNS(5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]], 0, 4))