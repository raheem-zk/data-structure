/*
class TrieNode {
    constructor() {
        this.children = new Map();
    }
}

class Trie {
    constructor(str) {
        this.root = new TrieNode();
        this.endSymbol = '*';
        this.populateSuffixTrie(str);
    }

    populateSuffixTrie(str) {
        // Implementation not provided
        // You would need to write the logic for populating the Trie with suffixes of the input string

        for (var i = 0; i < str.length; i++) {
            this.inserSubstringStartngAt(i, str);
        }
    }
    inserSubstringStartngAt(index, str){
        TrieNode = this.root;
        for ( var i = index; i< str.length; i++){
            let letter = str.charAt(i);
            let temp = this.children.find( x => x[0] === letter);
            if (!temp){
                let newNode = new TrieNode();
                this.children.put(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.put(endSymbol, null);
    }
    contains(str){
        let node = this.root;
        for ( let i = 0 ;i<str.length; i++){
            let letter = str.charAt(i);
            let temp = this.children.find( x => x[0] === letter);
            if (!temp){
                return false;
            }
            node = node.children.get(letter)
        }
        return node.children.containsKey(this.endSymbol);
    }
}
let obj = new Trie("mannan");
console.log(obj.contains("mannan"));

*/











/*
class Node{
    constructor(data){
        this.children = {};
        this.isWordEnd = false;
    }
}
class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let curr = this.root;
        for ( let i = 0  ; i<word.length; i++){
            let charToInsert = word[i];
            if ( ! (charToInsert in curr.children)){
                curr.children[charToInsert] = new Node();
            }    
            curr = curr.children[charToInsert]
        }
        curr.isWord = true
    }
    
    contains ( word ){
        let curr = this.root;
        for ( let i = 0  ; i<word.length; i++){
            let charToFind = word[i];
            if ( ! (charToFind  in curr.children)){
                return false;
            }    
            curr = curr.children[charToFind ]
        }
        return curr.isWordEnd;
    }

    startsWithPrefix(prefix){
        let curr = this.root;
        for ( let i = 0  ; i<prefix.length; i++){
            let charToFind = prefix[i];
            if ( ! (charToFind  in curr.children)){
                return false;
            }    
            curr = curr.children[charToFind ]
        }
        return true; 
    }
} 
const trie = new Trie();
trie.insert("hello");
console.log(trie.contains("hello")); // true
console.log(trie.contains("world"));
*/







/*
class TrieNode {
    constructor() {
        this.children = new Map();
    }
}

class Trie {
    constructor(str) {
        this.root = new TrieNode();
        this.endSymbol = '*';
        this.populateSuffixTrie(str);
    }

    populateSuffixTrie(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSubstringStartingAt(i, str);
        }
    }

    insertSubstringStartingAt(index, str) {
        let node = this.root;
        for (let i = index; i < str.length; i++) {
            let letter = str.charAt(i);
            if (!node.children.has(letter)) {
                let newNode = new TrieNode();
                node.children.set(letter, newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymbol, null);
    }

    contains(str) {
        let node = this.root;
        for (let i = 0; i < str.length; i++) {
            let letter = str.charAt(i);
            if (!node.children.has(letter)) {
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymbol);
    }
}

let obj = new Trie("mannan");
console.log(obj.contains("nnan")); // Output: true
*/
class TrieNode{
    constructor(){
        this.children = new Map();
    }
}
class Trie{
    constructor(str){
        this.root = new TrieNode();
        this.endSymble = '*';
        this.populateSuffixTrie(str);
    }
    populateSuffixTrie(str){
        for ( let i = 0 ;i<str.length; i++){
            this.insertSubStringStartAr(i, str);
        }
    }
    insertSubStringStartAr(index, str){
        let node = this.root;
        for ( let i = index; i<str.length; i++){
            let letter = str.charAt(i);
            if (!node.children.has(letter)){
                let newNode = new TrieNode();
                node.children.set(letter,newNode);
            }
            node = node.children.get(letter);
        }
        node.children.set(this.endSymble, null);
    }

    contains(str){
        let node = this.root;
        for ( let i = 0; i<str.length; i++){
            let letter = str.charAt(i);
            if (!node.children.has(letter)){
                return false;
            }
            node = node.children.get(letter);
        }
        return node.children.has(this.endSymble);
    }
}

let obj = new Trie("moon");
console.log(obj.contains("on"));