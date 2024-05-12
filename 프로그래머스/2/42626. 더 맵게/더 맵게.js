function solution(scoville, K) {
    let count = 0; // 섞은 횟수를 카운트
    const heap = new MinHeap(scoville); // 주어진 스코빌 지수로 힙 초기화

    while (heap.peek() < K) { // 힙의 최소 원소가 K 이상이 될 때까지 반복
        if (heap.size() < 2) return -1; // 두 개 이상의 원소가 필요하므로, 한 개만 남으면 -1 반환
        const min1 = heap.pop(); // 가장 낮은 스코빌 지수 추출
        const min2 = heap.pop(); // 두 번째로 낮은 스코빌 지수 추출
        const mixed = min1 + min2 * 2; // 새로운 스코빌 지수 계산
        heap.push(mixed); // 계산된 스코빌 지수를 다시 힙에 삽입
        count++;
    }

    return count;
}

class MinHeap {
    constructor(array) {
        this.heap = [];
        array.forEach(elem => this.push(elem));
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return top;
    }

    peek() {
        return this.heap[0] || null;
    }

    size() {
        return this.heap.length;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < element) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (rightChild < (swap === null ? element : leftChild)) swap = rightChildIndex;
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
}
