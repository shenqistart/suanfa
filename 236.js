let lowestCommonAncestor = function (root, p, q) {
    let findAndCreate = (node, target, depth) => {
        if (node !== target) {
            let findInLeft
            if (node.left) {
                node.left.parent = node
                findInLeft = findAndCreate(node.left, target, depth + 1)
            }

            if (findInLeft) {
                return findInLeft
            } else {
                if (node.right) {
                    node.right.parent = node
                    return findAndCreate(node.right, target, depth + 1)
                }
            }
        } else {
            return {
                depth,
                node,
            }
        }
    }

    let findP = findAndCreate(root, p, 0) || {}
    let findQ = findAndCreate(root, q, 0) || {}

    let cur = findP.depth > findQ.depth ? findQ.node : findP.node
    console.log(findP, findQ, cur, 'cur');
    while (!(isAncestor(cur, p) && isAncestor(cur, q))) {
        debugger
        cur = cur && cur.parent
    }

    return cur
}
// 核心判别式

function isAncestor(node, target) {
    if (!node) {
        return false
    }
    if (node !== target) {
        return !!(isAncestor(node.left, target) || isAncestor(node.right, target))
    } else {
        return true
    }
}
let root = {
    value: 8,
    left: {
        value: 5,
        left: { value: 3 },
        right: { value: 6 }
    },
    right: {
        value: 10,
        right: { value: 12 }
    }
}
    , p = 3, q = 12;
console.log(lowestCommonAncestor(root, p, q), 'test');