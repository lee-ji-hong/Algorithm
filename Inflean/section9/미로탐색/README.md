### 미로탐색

# 문제 설명

7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요. 출발점은 격
자의 (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표이다. 격자판의 1은 벽이고, 0은 통로이다. 격
자판의 움직임은 상하좌우로만 움직인다. 미로가 다음과 같다면

[
  [ 0, 0, 0, 0, 0, 0, 0 ],
  [ 0, 1, 1, 1, 1, 1, 0 ],
  [ 0, 0, 0, 1, 0, 0, 0 ],
  [ 1, 1, 0, 1, 0, 1, 1 ],
  [ 1, 1, 0, 0, 0, 0, 1 ],
  [ 1, 1, 0, 1, 1, 0, 0 ],
  [ 1, 0, 0, 0, 0, 0, 0 ],
]

위의 지도에서 출발점에서 도착점까지 갈 수 있는 방법의 수는 8가지이다.

# 입력 설명

7*7 격자판의 정보가 주어집니다.

# 출력 설명

첫 번째 줄에 경로의 가지수를 출력한다.

# 입력예제 1

0 0 0 0 0 0 0
0 1 1 1 1 1 0
0 0 0 1 0 0 0
1 1 0 1 0 1 1
1 1 0 0 0 0 1
1 1 0 1 1 0 0
1 0 0 0 0 0 0

# 출력예제 1

8

# 문제풀이
- dfs
- x,y축 그려보면 더 쉬움
- nx, ny는 현재 좌표에서 상하좌우 방향 설정하는 것
- 조건은 몇사면에 위치해있는지 범위를 설정해줌.
