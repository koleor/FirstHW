var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.add = function (value) {
        var newNode = new TreeNode(value);
        //Создание корня
        if (this.root == null) {
            this.root = newNode;
        }
        //Добавление элементов
        else {
            this._add(this.root, newNode, this.root);
        }
    };
    Tree.prototype._add = function (currentNode, newNode, parent) {
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
    };
    Tree.prototype.search = function (value) {
        if (this.root !== null) {
            return this._search(this.root, value);
        }
    };
    Tree.prototype.delete = function (value) {
        if (this.root !== null) {
            var deletedNode = this._search(this.root, value);
            if (deletedNode) {
                if (deletedNode.value > deletedNode.parent.value) {
                    deletedNode.parent.right = null;
                }
                else {
                    deletedNode.parent.left = null;
                }
            }
        }
    };
    //По хорошему надо пересобирать древо ¯\(°_o)/¯
    Tree.prototype.change = function (value_orig, value_change) {
        if (this.root !== null) {
            var changble = this._search(this.root, value_orig);
            if (changble) {
                changble.value = value_change;
            }
        }
    };
    Tree.prototype.treeHeight = function () {
        return this._calculateHeight(this.root);
    };
    Tree.prototype._calculateHeight = function (node) {
        if (node === null) {
            return 0;
        }
        var leftHeight = this._calculateHeight(node.left);
        var rightHeight = this._calculateHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    };
    //Горизонатьно пробегаеся по древу
    Tree.prototype._horizontal = function () {
        var height = 0;
        var queue = [];
        if (this.root !== null) {
            queue.push(this.root);
        }
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].left !== null) {
                if (queue[i].left !== null) {
                    queue.push(queue[i].left);
                }
            }
            if (queue[i].right !== null) {
                queue.push(queue[i].right);
            }
            height++;
        }
        return queue;
    };
    //Поиск
    Tree.prototype._search = function (currentNode, value) {
        //console.log (currentNode);
        if (value > currentNode.value) {
            if (currentNode.right == null) {
                return false;
            }
            else {
                return this._search(currentNode.right, value);
            }
        }
        else if (value < currentNode.value) {
            if (currentNode.left == null) {
                return false;
            }
            else {
                return this._search(currentNode.left, value);
            }
        }
        else {
            return currentNode;
        }
    };
    return Tree;
}());
var tree = new Tree();
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
