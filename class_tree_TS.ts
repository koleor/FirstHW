class TreeNode {
    value: number;
    parent: TreeNode | null;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number) {
        this.value  = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    add(value: number) {
        let newNode = new TreeNode(value);
        //Создание корня
        if (this.root == null) {

            this.root = newNode;
        }
        //Добавление элементов
        else {
            this._add(this.root, newNode, this.root);

        }
    }

    _add(currentNode: TreeNode, newNode: TreeNode, parent: TreeNode) {
        if (newNode.value > currentNode.value) {
            if (currentNode.right == null) {
                currentNode.right = newNode;
                currentNode.right.parent = parent;
                //console.log(currentNode.right.parent );
            }
            else {

                this._add(currentNode.right, newNode, currentNode.right);
            }
        }
        else {
            if (currentNode.left == null) {
                currentNode.left = newNode;
                currentNode.left.parent = parent;
                //console.log(currentNode.left.parent = parent );
            }
            else {
                this._add(currentNode.left, newNode, currentNode.left);
            }
        }
    }

    search(value: number) {
        if (this.root !== null) {
        return this._search(this.root, value);
    }
}

    delete(value: number) {
        if (this.root !== null){
        let deletedNode = this._search(this.root, value);
        if (deletedNode) {
            if (deletedNode.value > deletedNode.parent.value) {
                deletedNode.parent.right = null;
            }
            else {
                deletedNode.parent.left = null;
            }

        }
    }
    }

    //По хорошему надо пересобирать древо ¯\(°_o)/¯
    change(value_orig: number, value_change: number) {
        if (this.root !== null) {
        let changble = this._search(this.root, value_orig);
        if (changble) {
            changble.value = value_change;
        }
    }
    }

    treeHeight() {
        return this._calculateHeight(this.root)
    }


    _calculateHeight(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }

        let leftHeight = this._calculateHeight(node.left);
        let rightHeight = this._calculateHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    //Горизонатьно пробегаеся по древу
    _horizontal() {
        let height : number = 0;
        let queue : TreeNode[] = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        for (let i = 0; i < queue.length; i++) {

            if (queue[i].left !== null) {
                if (queue[i].left !== null) {
                    queue.push(queue[i].left as TreeNode);
                }
            }
            if (queue[i].right !== null) {
                queue.push(queue[i].right as TreeNode);
            }
            height++;
        }

        return queue
    }

    //Поиск
    _search(currentNode: TreeNode, value: number) {
        //console.log (currentNode);
        if (value > currentNode.value) {
            if (currentNode.right == null) {
                return false
            }
            else {
                return this._search(currentNode.right, value);
            }
        }
        else if (value < currentNode.value) {
            if (currentNode.left == null) {
                return false
            }
            else {
                return this._search(currentNode.left, value);
            }
        }
        else {
            return currentNode;
        }
    }
}

let tree = new Tree();
tree.add(1);
tree.add(10);
tree.add(5);
tree.add(4);
tree.add(1);
tree.add(12);
//tree.change(1, 45);
//tree.delete(4);
console.log(tree);
console.log(tree.search(10));
console.log(tree.search(2));
console.log(tree.treeHeight());