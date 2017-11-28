var Node = function(value, next) {
    this.value = value;
    this.next = null;
}

var List = function() {
    this.listLength = 0;
    this.head = null;
}

Node.prototype = {
    getValue: function() {
        return this.value;
    },
    getNext: function() {
        return this.next;
    },
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
    }
}


function isNull(node) {
    if(node.next == null)
        return true;
    else
        return false;
}

var list = new List();
list.addNode(5);
list.addNode(7);
list.addNode(8);
console.log(list);
console.log(list.getLength(list));