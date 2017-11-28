var Node = function(value, next) {
    this.value = value;
    this.next = null;
}

var List = function() {
    this.listLength = 0;
    this.head = null;
}

Node.prototype = {
    isNull: function() {
        if((this.next) == null)
            return true;
        else 
            return false; 
    }
} 

List.prototype = {
    addNode: function(value) {
        var node = new Node(value), currentNode = this.head;
        
        if(!currentNode) { // the list is empty
            this.head = node;
            this.listLength++;
            return node;
        }
        
        while(currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.listLength++;
        return node;
    },
    getLength: function() {
        return this.listLength;
    },
    printList: function() {
        var currentNode = this.head;
        while(currentNode.next) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(currentNode.value);
    }
}

var list = new List();
list.addNode(5);
list.addNode(7);
list.addNode(8);
list.addNode(10);
list.addNode(14);
list.addNode(13);
list.addNode(12);
list.printList();
