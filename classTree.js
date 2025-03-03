class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Метод для вставки элемента в дерево
    insert(data) {
        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Вспомогательный метод для рекурсивной вставки
    _insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Метод для поиска элемента в дереве
    search(data) {
        return this._searchNode(this.root, data);
    }

    // Вспомогательный метод для рекурсивного поиска
    _searchNode(node, data) {
        if (!node) {
            return false;
        }

        if (data < node.data) {
            return this._searchNode(node.left, data);
        } else if (data > node.data) {
            return this._searchNode(node.right, data);
        } else {
            return true;
        }
    }

    // Метод для определения высоты дерева
    height() {
        return this._calculateHeight(this.root);
    }

    // Вспомогательный метод для рекурсивного расчета высоты
    _calculateHeight(node) {
        if (!node) {
            return 0;
        }

        const leftHeight = this._calculateHeight(node.left);
        const rightHeight = this._calculateHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    // Метод для обхода дерева в порядке "in-order" (для удобства отладки)
    inOrderTraversal() {
        const result = [];
        this._inOrder(this.root, result);
        return result;
    }

    // Вспомогательный метод для рекурсивного обхода "in-order"
    _inOrder(node, result) {
        if (node) {
            this._inOrder(node.left, result);
            result.push(node.data);
            this._inOrder(node.right, result);
        }
    }
}

// Пример использования
const tree = new Tree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log(tree.inOrderTraversal()); // [3, 5, 7, 10, 15]

console.log(tree.search(7)); // true
console.log(tree.search(12)); // false

console.log(tree.height()); // 3