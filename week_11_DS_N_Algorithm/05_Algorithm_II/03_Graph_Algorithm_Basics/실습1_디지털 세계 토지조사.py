'''
디지털 세계 토지조사

디지몬들이 살고 있는 추억의 세계 디지털 월드는 다양한 크기의 섬들로 이루어져있습니다. 
당신은 디지털국토정보공사를 도와 디지털월드를 개발하기 위한 토지조사를 진행하기로 하였습니다.

디지털 월드는 정사각형모양으로 생겼고, 토지는 1, 해양은 0으로 구성되어있습니다. 
1이 상,하,좌,우로 연결되어있는 경우를 섬이라고 합니다.

디지털 월드에 있는 모든 섬들의 갯수와 섬의 크기를 조사하여 디지털 국토정보공사의 지적측량을 도와주세요.

디지털월드의 국토는 다음과 같이 생겼습니다.
그림 1

디지털월드를 탐색해서 다음과 같이 섬의 구역을 나누고, 그 크기를 조사하면 됩니다.
그림 2

여러분이 출력해야 할 것은 총 섬의 개수와 섬의 크기가 각각 몇인지를 오름차순으로 정리한 결과입니다.

실습
입력
첫째 줄에는 디지털 월드의 크기가 주어집니다. 디지털 월드는 항상 정사각형입니다. 두 번째 줄부터 디지털 월드 국토의 정보가 주어집니다. 1은 땅, 0은 바다입니다.

출력
1이 상,하,좌,우로 연결되어있는 경우를 섬이라고 합니다.
두가지 정보를 가진 튜플을 출력합니다. (섬의 전체 갯수, 각 섬의 크기를 오름차순으로 정렬한 리스트)를 출력합니다.

입력 예시
7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
출력 예시
(3, [7, 8, 9])
'''


def dfs(x, y, pMap, visited):
    global isize
    
    visited[x][y] = 1
    
    di = [(1,0), (0,1), (-1,0), (0,-1)]
    
    n = len(pMap)
    
    for d in di:
        nx = x + d[0]
        ny = y + d[1]
        
        if nx < 0 or ny < 0 or nx >= n or ny >= n: continue
        if pMap[nx][ny] == 0: continue
        
        if not visited[nx][ny]:
            isize += 1
            dfs(nx, ny, pMap, visited)


def cadastralSurvey(pMap):
    '''
    디지털월드의 국토의 모양이 주어졌을 때, 섬의 갯수 (int) 와 각 섬의 크기들 (list)을 반환하세요.
    '''
    global isize
    
    num_island = 0
    
    n = len(pMap)
    
    visited = []
    for i in range(n):
        visited.append([0 for j in range(n)])
        
    islands_size = []
    for i in range(n):
        for j in range(n):
            if pMap[i][j] == 1 and visited[i][j] == 0:
                num_island += 1
                isize = 1
                dfs(i, j, pMap, visited)
                islands_size.append(isize)
                
    return num_island, sorted(islands_size)



def read_input():
    size = int(input())
    returnMap = []
    for _ in range(size):
        line = input()
        __line = []
        for j in range(len(line)) :
            __line.append(int(line[j]))
        
        returnMap.append(__line)
    return returnMap

def main():
    pMap = read_input()
    print(cadastralSurvey(pMap))

if __name__ == "__main__":
    main()

