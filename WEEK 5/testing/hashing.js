/*
// hash table 
// 1 set :- to store a key value paire
// 2 get to retrieve a value given its key
// 3 remove to delete a key value pair 
// 4 hashing function to convert a string key to a number index

class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash (key){
        let total = 0;
        for (var i =0 ;i<key.length ; i++){
            total += key.charCodeAt(i);
        }
        return total%this.size;
    }
    set ( key, value){
        let index = this.hash(key);
        this.table[index] = value;
    }
    display(){
        for(var i=0 ;i<this.table.length; i++){
            if (this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
    get(key){
        let index = this.hash(key);
        return this.table[index];
    }
    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
    }
}

let hash = new hashTable(23);

hash.set("name","raheem");
hash.set("age",20);
hash.set("place","malappuram");

hash.display();
// console.log(hash.get("place"));

hash.remove("name");
hash.display();
*/


// colition avoiding
/*
class hashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for (var i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let samekeyItm = bucket.find(x => x[0] === key);
            if (samekeyItm) {
                samekeyItm[1] = value;
            } else {
                bucket.push([key, value]);
            }
        }
    }
    display() {
        for (var i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
    get(key) {
        let index = this.hash(key);
        // return this.table[index];
        let bucket = this.table[index];
        if (bucket) {
            let samekeyItm = bucket.find(x => x[0] === key);
            if (samekeyItm) {
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket){
            let samekeyItm = bucket.find(x => x[0] === key);
            if (samekeyItm){
                bucket.splice(bucket.indexOf(samekeyItm), 1);
            }
        }
    }
}

let hash = new hashTable(20);

hash.set("name", "raheem");
hash.set("age", 20);
hash.set("place", "malappuram");

hash.display();
console.log(hash.get("place"));
hash.set("name","shamnad");
hash.remove("age");
hash.display();
*/


// hash table 
class hashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        let total = 0 ;
        for ( var i = 0 ;i<key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set (key , value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket){
            this.table[index] = [[key, value]]; 
        }else{
            let samekeyItm = bucket.find( x => x[0] === key);
            if (samekeyItm){
                samekeyItm[1] =value;
            }else{
                samekeyItm.push([key, value]);
            }
        }
    }
    get (key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if(bucket){
            let samekeyItm = bucket.find( x => x[0] === key);
            if (samekeyItm){
                return samekeyItm;
            }
        }
        return undefined;
    }
    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket){
            let samekeyItm = bucket.find( x => x[0] === key);
            if(samekeyItm){
                bucket.splice(bucket.indexOf(samekeyItm), 1);
            }
        }
    }
    display(){
        for (var i = 0 ; i<this.table.length ;i++){
            if ( this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}

let hash = new hashTable(20);

hash.set ("name","shamnad");
hash.set ("age",22);
hash.set ("phone",9876543210);

hash.remove("age");
hash.display();
console.log(hash.get("phone"));