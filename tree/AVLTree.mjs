import { Compare, defaultCompare } from "../linkedList/sortedLinkedList.mjs";
import BinarySearchTree from "./binarySearchTree.mjs";

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}

class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare){
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }
    getNodeHeight(node){
        if(node == null){
            return -1;
        }
        return Math.max(
            this.getNodeHeight(node.left), this.getNodeHeight(node.right)
        ) + 1;
    }
    getBalancedFactor(node){
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }
    rotationLL(node){
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node
        return tmp;
    }
    rotationRR(node){
        const tmp = node.right
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
    rotationLR(node){
        node.left = this.rotationLL(node);
        this.rotationRR(node);
    }
    rotationRL(node){
        node.right = this.rotationRR(node);
        this.rotationLL(node);
    }
    insert(key){
        this.root = this.insertNode(node, key);
    }
    insertNode(node, key){
        if(node == null){
            return new Node(key);
        }
        else if(this.compareFn === Compare.LESS_THAN){
            node.left = this.insertNode(node.left, key);
        }
        else if(this.compareFn === Compare.BIGGER_THAN){
            node.right = this.insertNode(node.right, key);
        }
        else{
            return node;    
        }

        // balanced node
        const balancedFactor = this.BalanceFactor(node);
        if(balancedFactor === BalanceFactor.UNBALANCED_LEFT){
            if(this.compareFn(key, node.left.key) === Compare.LESS_THAN){
                node = this.rotationLL(node);
            }
            else{
                node = this.rotationLR(node);
            }
        }
        if(balancedFactor === BalancedFactor.UNBALANCED_RIGHT){
            if(this.compareFn(key, node.right.key) === Compare.BIGGER_THAN){
                node = this.rotationRR(node);
            }
            else{
                node = this.rotationRL(node);
            }
        }
        return node;
    }
    removeNode(node, key){
        node = super.removeNode(node, key);
        if(node == null){
            return node;
        }
        const balacedFactor = this.getBalancedFactor(node);
        if(balacedFactor === BalanceFactor.UNBALANCED_LEFT){
            const balancedFactorLeft = this.getBalancedFactor(node.left);
            if(balancedFactorLeft === BalanceFactor.BALANCED || BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationLL(node);
            }
            else if(balacedFactor === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationLR(node.left);
            }
        }
        if(balacedFactor === BalanceFactor.UNBALANCED_RIGHT){
            const balacedFactorRight = this.getBalancedFactor(node.right);
            if(balacedFactorRight === BalanceFactor.BALANCED || BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT){
                return this.rotationRR(node);
            }
            else if(balancedFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT){
                return this.rotationRL(node.right);
            }
        }
        return node;
    }
}