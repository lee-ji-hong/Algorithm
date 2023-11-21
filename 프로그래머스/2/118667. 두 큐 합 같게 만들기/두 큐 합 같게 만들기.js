class Node {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Queue {
    constructor(list = []) {
        this.size = 0;
        this.front = null;
        this.rear = null;
        list.forEach(element => {
            this.enqueue(element);
        });
    }

    enqueue(value) {
        const new_node = new Node(value);
        if (!(this.front)) {
            this.front = new_node;
            this.rear = new_node;
        }
        else {
            this.rear.next = new_node
            this.rear = this.rear.next
        }
        this.size++;
    }

    dequeue() {
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        this.size--;
        return dequeuedValue;
    }
}

function solution(queue1, queue2) {
    const n = queue1.length;
    const q1 = new Queue(queue1);
    const q2 = new Queue(queue2);
    let answer = -1;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0,);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0,);

    while (answer < n * 4) {
        answer++;
        if (sum1 === sum2) {
            return answer
        }
        else if (sum1 > sum2) {
            const tmp = q1.dequeue();
            q2.enqueue(tmp);
            sum1 -= tmp;
            sum2 += tmp;
        }
        else if (sum1 < sum2) {
            const tmp = q2.dequeue();
            q1.enqueue(tmp);
            sum1 += tmp;
            sum2 -= tmp;
        }
    }

    return -1;
}

// function solution(queue1, queue2) {
//     let n = queue1.length;
//     let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
//     let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
//     let answer = -1;

//     while(answer < n * 4){
//         answer++;
//         console.log(answer, queue1, queue2)
//         if(sum1 === sum2){
//             return answer;
//         }else if(sum1 < sum2){
//             const element = queue2.shift();
//             queue1.push(element);
//             sum1 += element;
//             sum2 -= element;
//         }else{
//             const element = queue1.shift();
//             queue2.push(element);
//             sum1 -= element;
//             sum2 += element;
//         }
        
//     }
//     return -1;
// }