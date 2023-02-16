function solution(priorities, location) {
  let answer = 0;
  let queue = priorities.map((priority, index) => ({ priority, index })); // 각 문서마다 우선순위와 인덱스 정보를 객체로 만들어 큐에 넣음
  
  while (queue.length > 0) { // 큐가 빌 때까지 반복
    let first = queue.shift(); // 가장 앞에 있는 문서를 큐에서 꺼냄
    if (queue.some((doc) => doc.priority > first.priority)) { // 큐에 우선순위가 더 높은 문서가 있다면
      queue.push(first); // 가장 앞에 꺼낸 문서를 큐의 가장 뒤에 넣음
    } else { // 우선순위가 가장 높은 문서라면
      answer++; // 출력될 문서의 개수를 1 증가시킴
      if (first.index === location) { // 출력될 문서가 원하는 문서라면
        break; // 출력까지 걸린 시간을 반환하기 위해 반복문을 빠져나감
      }
    }
  }
  
  return answer;
}