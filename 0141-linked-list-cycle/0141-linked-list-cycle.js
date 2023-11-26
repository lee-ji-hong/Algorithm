function ListNode(val) {
    this.val = val;
    this.next = null;
}
//마지막 노드가 다른 노드를 가르키고 있다면 사이클이 있다는 뜻
var hasCycle = function(head) {
    //빈 리스트이거나 한 노드만 있는 경우 사이클이 없으므로 false로 반환
    if(!head || !head.next) {
        return false;
    }
    let slow = head; //한 칸씩 이동하는 노드
    let fast = head; // 두 칸씩 이동하는 노드
    
    while (fast && fast.next) {
        slow = slow.next; //slow는 한 칸씩 이동
        fast = fast.next.next; //fast는 두 칸씩 이동
        
        //slow와 fast가 만나면 사이클이 존재하므로 true 반환
        if(slow === fast) {
            return true;
        }
    }
    
    return false; //false가 끝에 도달하면 사이클이 없으므로 false 반환
}