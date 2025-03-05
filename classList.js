class nodeList{
    constructor(data, index){
        this.data = data;
        this.index = index;
        this.nextList = null;
    }
}

class modlist {

    constructor(){
        this.node = null;
        this.lenght = 0;
    }

    search(index){
        let currentNode = this.node;
        while(currentNode.nextList){
            if(currentNode.index == index){
                return currentNode
            }
            currentNode = currentNode.nextList
        }
        
        return false

    }
    add(data){
        let newNode = new nodeList(data, this.lenght);
        if (this.node == null){
            this.node = newNode;
            this.lenght++;
        }
        else{
            let currentNode = this.node;
            while(currentNode.nextList){
                currentNode = currentNode.nextList;
            }
            currentNode.nextList = newNode;
            this.lenght++;
        }
    }
    delete(data){
        let currentNode = this.node
        let previous = null;
        for(let i = 0; i<this.lenght; i++){
            if(currentNode.data == data){
                previous.nextList = currentNode.nextList;
                currentNode.nextList.index--;
                this.lenght--;
                return
            }
            previous = currentNode;
            currentNode = currentNode.nextList;
        }
    }

}

let list = new modlist();

list.add(1);
list.add(2);
list.add(3);
console.log(list);
list.delete(2);
console.log(list);