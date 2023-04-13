class MinHeap {
    constructor(arr) {
        this.arr = arr;
        this.buildheap(this.arr);
    }
    buildheap(heap){
        for ( var i = this.parent(heap.length-1); i>= 0 ; i--){
            this.shiftDown(i);
        }
    }
    shiftDown(curetPIdx){
        let leftIdx = this.leftChild(curetPIdx);
        let endIdx = this.arr.length-1;
        while( leftIdx <= endIdx){
            let rightIdx = this.rightChild(curetPIdx);
            let idxToShift ;
            if (rightIdx <= endIdx && this.arr[rightIdx] < this.arr[leftIdx]){
                idxToShift = rightIdx;
            }else{
                idxToShift = leftIdx;
            }
            if( this.arr[curetPIdx] > this.arr[idxToShift]){
                [this.arr[curetPIdx], this.arr[idxToShift]] = [this.arr[idxToShift], this.arr[curetPIdx]];
                curetPIdx = idxToShift ;
                leftIdx = this.leftChild(curetPIdx);
            }else{
                return;
            }
        }
    }
    shiftUp(curent){
        let parantIdx = this.parent(curent);
        while( parantIdx > 0 && this.arr[parantIdx] > this.arr[curent]){
            [this.arr[parantIdx], this.arr[curent]] = [this.arr[curent], this.arr[parantIdx]];
            curent = parantIdx;
            parantIdx = this.parent(curent);
        }
    }
    insert (value){
        this.arr.push(value);
        this.shiftUp(this.arr.length-1);
    }
    remove(){
        this.arr[0] = this.arr.pop();
        this.shiftDown(0);
    }
    parent(i) {
        return Math.floor((i - 1 )/ 2);
    }

    leftChild(i) {
        return Math.floor((i * 2) + 1);
    }
    rightChild(i) {
        return Math.floor((i * 2) + 2);
    }
    display() {
        for (var i = 0; i < this.arr.length; i++) {
            console.log(this.arr[i]);
        }
    }
}

let o = new MinHeap([6, 1, 9, 3, 7, 11, 4, 8]);
o.display();
// o.remove();
o.insert(2);
o.display();
