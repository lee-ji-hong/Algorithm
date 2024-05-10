function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length-1;
    while(left < right){
        let sum = people[left]+people[right];
        if (sum > limit){
            left++; 
        }else {
            left++;
            right--;
        }
        answer++;
    }
     if (left === right) answer++;
    
    return answer;
}

/**
설명

- 투포인트 방식으로 풀이
- 좌,우를 포인트로 설정
- sort로 내림차순해서 무거운 순으로 정렬
- sum > limit : left 인덱스에 있는 사람만 보트에 태울 수 있습니다.  따라서 left 인덱스를 하나 증가시켜 다음으로 무거운 사람으로 이동합니다.
- sum < limit : 무게가 넘지 않아  같이 보트에 태울 수 있습니다. 따라서 left와 right 각각 한칸씩 이동
- 오 === 왼 : 즉, 한 사람만 남았다면), 이 사람도 보트 하나를 사용해야 하므로 answer에 1을 추가합니다.
**/