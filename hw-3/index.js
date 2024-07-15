/*
a) Prototype is simply a template for creating objects or a parent object. When we create a new object,
the new object can inherit properties and methods from the parent object.
So, it's like a set of ready features that a new object gets it for free.

b) Prototype chain is like a series of parents which are linked to each other. For instance, 
we said that when we create a new object, that object gets all the parent object's features.
But what if, the property or the method that we ask for an object, doesn't have it. 
So, here it will look to its parent(prototype), if parent doesn't have it, then it will
look to parent's parent and so on. It will go up to the last parent. So, the chain of
look up from one prototype to another one is called prototype chain.
*/


// Custom implementations of Array methods

// 1) map
Array.prototype.customMap = function (cb) {
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this))
    }
    return newArr;
}



// 2) filter
Array.prototype.customFilter = function (cb) {
    console.log(args);
    const newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}

console.log([1,2,3,4].customFilter(i => i === 2));


// 3) find
Array.prototype.customFind = function (cb, args) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
}



// 4) pop
Array.prototype.customPop = function () {
    if (this.length === 0) {
        return undefined;
    }

    let removedElement = this[this.length - 1];
    this.length -= 1;
    return removedElement;
}

// 5) push
Array.prototype.customPush = function (...args) {
    for (let i = 0; i < args.length; i++) {
        this[this.length] = args[i]        
    }

    return this.length;
}

// 6) reverse
Array.prototype.customReverse = function () {
    let rightenSideIndex = this.length - 1;
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
        let leftenSideItem = this[i];
        this[i] = this[rightenSideIndex];
        this[rightenSideIndex] = leftenSideItem;
        rightenSideIndex--;
    }
    return this;
}
