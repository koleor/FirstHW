class TreeNode {
    constructor(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    add(value) {
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

    _add(currentNode, newNode, parent, level) {
        if (newNode.value > currentNode.value) {
            if (currentNode.right == null) {
                currentNode.right = newNode;
                currentNode.right.parent = parent;
                //console.log(currentNode.right.parent );
            }
            else {

                this._add(currentNode.right, newNode, currentNode.right, currentNode.level + Number(1));
            }
        }
        else {
            if (currentNode.left == null) {
                currentNode.left = newNode;
                currentNode.left.parent = parent;
                //console.log(currentNode.left.parent = parent );
            }
            else {
                this._add(currentNode.left, newNode, currentNode.left, currentNode.level + Number(1));
            }
        }
    }

    search(value) {

        return this._search(this.root, value);
    }

    delete(value) {

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

    //По хорошему надо пересобирать древо ¯\(°_o)/¯
    change(value_orig, value_change) {
        let changble = this._search(this.root, value_orig);
        if (changble) {
            changble.value = value_change;
        }
    }

    treeHeight() {
        return this._calculateHeight(this.root)
    }


    _calculateHeight(node) {
        if (node === null) {
            return 0;
        }

        let leftHeight = this._calculateHeight(node.left);
        let rightHeight = this._calculateHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    _vertical() {
        let height = 0;
        let queue = [this.root]
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left) {

            }
        }


    }

    //Горизонатьно пробегаеся по древу
    _horizontal() {
        let height = 0;
        let queue = [this.root];
        for (let i = 0; i < queue.length; i++) {

            if (queue[i].left) {
                queue.push(queue[i].left)
            }
            if (queue[i].right) {
                queue.push(queue[i].right)
            }
            height++;
        }

        return queue
    }

    //Поиск
    _search(currentNode, value) {
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