class MinHeap {
    constructor(arr) {
        this.arr = arr;
        this.buildHeap(arr);
    }
    buildHeap(arr) {
        var heap = arr;
        for (var i = this.parent(heap.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    parent(i) {
        return Math.floor((i - 1) / 2);
    }
    shiftDown(currentIdx) {
        var heap = this.arr;
        var endIdx = heap.length - 1;
        var leftIdx = this.leftChild(currentIdx);
        while (leftIdx <= endIdx) {
            var rightIdx = this.rightChild(currentIdx);
            var idxToShift;
            if (rightIdx <= endIdx && heap[rightIdx] < heap[leftIdx]) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }
            if (heap[currentIdx] > heap[idxToShift]) {
                [heap[currentIdx], heap[idxToShift]] = [heap[idxToShift], heap[currentIdx]];
                currentIdx = idxToShift;
                leftIdx = this.leftChild(currentIdx);
            } else {
                return;
            }
        }
    }
    leftChild(i) {
        return Math.floor((i * 2) + 1);
    }
    rightChild(i) {
        return Math.floor((i * 2) + 2);
    }
    shiftUp(current) {
        var heap = this.arr;
        var parentIdx = this.parent(current);
        while (parentIdx >= 0 && heap[parentIdx] > heap[current]) {
            [heap[parentIdx], heap[current]] = [heap[current], heap[parentIdx]];
            current = parentIdx;
            parentIdx = this.parent(current);
        }
    }
    remove() {
        var heap = this.arr;
        heap[0] = heap.pop();
        this.shiftDown(0);
    }
    display() {
        var heap = this.arr;
        for (var i = 0; i < heap.length; i++) {
            console.log(heap[i]);
        }
    }
}
let o = new MinHeap([5,2,6,1,8]);
o.display();
o.remove();
o.remove();
o.remove();
o.display();

