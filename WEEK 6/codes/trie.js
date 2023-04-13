class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (!currentNode.children[ch]) {
          currentNode.children[ch] = new TrieNode();
        }
        currentNode = currentNode.children[ch];
      }
      currentNode.isEndOfWord = true;
    }
  
    search(word) {
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (!currentNode.children[ch]) {
          return false;
        }
        currentNode = currentNode.children[ch];
      }
      return currentNode.isEndOfWord;
    }
  
    startsWith(prefix) {
      let currentNode = this.root;
      for (let i = 0; i < prefix.length; i++) {
        const ch = prefix[i];
        if (!currentNode.children[ch]) {
          return false;
        }
        currentNode = currentNode.children[ch];
      }
      return true;
    }
  }

const trie = new Trie();
trie.insert("apple");
trie.search("apple"); // returns true
trie.search("app"); // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app"); // returns true