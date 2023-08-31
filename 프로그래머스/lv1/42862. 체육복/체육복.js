function solution(n, lost, reserve) {
    const students = new Array(n).fill(1);

    lost.forEach(student => students[student - 1]--);
    reserve.forEach(student => students[student - 1]++);

    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            if (students[i - 1] === 2) {
                students[i - 1]--;
                students[i]++;
            } else if (students[i + 1] === 2) {
                students[i + 1]--;
                students[i]++;
            }
        }
    }

    const answer = students.filter(student => student > 0).length;
    return answer;
}

// 1. 학생들의 수만큼 길이가 n인 배열 students를 생성합니다. 이 배열은 학생들의 상태를 나타냅니다. 초기값은 모두 체육복을 가지고 있는 상태인 1로 채워줍니다.

// 2.lost 배열에 있는 학생은 체육복을 도난당한 상태로 students 배열에서 값을 1 빼줍니다.

// 3.reserve 배열에 있는 학생은 여벌의 체육복을 가지고 있는 상태로 students 배열에서 값을 1 더해줍니다.

// 4.이제 students 배열을 순회하며 체육복이 없는 학생(0인 경우)을 찾습니다. 해당 학생의 앞 번호와 뒷 번호에 여벌의 체육복이 있는 학생이 있다면 체육복을 빌려줍니다. 체육복을 빌려주고 나면 해당 학생의 상태를 1로 바꿔줍니다.

// 5.마지막으로 students 배열을 순회하며 체육복을 가진 학생의 수를 세어 반환합니다.
