### 연필 개수

# 문제 설명

연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

# 입력 설명

첫 번째 줄에 1000 이하의 자연수 N이 입력된다.

# 출력 설명

첫 번째 줄에 필요한 다스 수를 출력합니다.

# 입력예제 1

25

# 출력예제 1

3

# 입력예제 2

178

# 출력예제 2

15

# 문제풀이

Math.ceil을 사용하여 해당 값을 구해주었습니다. 나누기를 하면 소수점이 발생할 경우 올림을 해주는 방식입니다. 예를들어 25명의 학생이 있을 경우 25자루가 필요하기 때문에 3다스가 필요하게 됩니다.
