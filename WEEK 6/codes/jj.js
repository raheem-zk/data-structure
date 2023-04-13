class maxHeap {
    constructor(heap) {
        this.heap = heap;
        this.buildHeap(heap);
    }
    buildHeap(heap) {
        for (var i = this.parant(heap.length - 1); i >= 0; i--) {
            this.shiftDown(i);
        }
    }
    shiftDown(curentPIdx) {
        let endIdx = this.heap.length - 1;
        let leftIdx = this.leftChild(curentPIdx);
        while (leftIdx <= endIdx) {
            let rightIdx = this.rightChild(curentPIdx);
            let idxToShift;
            if (rightIdx <= endIdx && this.heap[rightIdx] > this.heap[leftIdx]) {
                idxToShift = rightIdx;
            } else {
                idxToShift = leftIdx;
            }
            if (this.heap[curentPIdx] < this.heap[idxToShift]) {
                [this.heap[curentPIdx], this.heap[idxToShift]] = [this.heap[idxToShift], this.heap[curentPIdx]];
                curentPIdx = idxToShift;
                leftIdx = this.leftChild(curentPIdx);
            } else {
                return;
            }
        }
    }
    shiftUp(cuentIdx) {
        let parantIdx = this.parant(cuentIdx);
        while (cuentIdx > 0 && this.heap[parantIdx] < this.heap[cuentIdx]) {
            [this.heap[cuentIdx], this.heap[parantIdx]] = [this.heap[parantIdx], this.heap[cuentIdx]];
            cuentIdx = parantIdx;
            parantIdx = this.parant(cuentIdx);
        }
    }
    remove(){
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }
    insert(value) {
        this.heap.push(value);
        this.shiftUp(this.heap.length - 1);
    }
    display() {
        for (var i = 0; i < this.heap.length; i++) {
            console.log(`${this.heap[i]}`);
        }
    }
    parant(i) {
        return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
        return Math.floor((i * 2) + 1);
    }
    rightChild(i) {
        return Math.floor((i * 2) + 2);
    }
}
let o = new maxHeap([13, 10, 30, 20, 15]);
o.display();
console.log(".................");
o.insert(100);
o.insert(25);
// o.remove();
// o.remove();
o.display();