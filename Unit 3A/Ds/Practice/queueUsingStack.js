/*
Stack {
  push()
  top()
  pop()
  isEmpty()
}
*/
class Queue {
    constructor() {
        this.S1 = new Stack()
        this.S2 = new Stack()
    }
    push(value) {
        //write your code here..
        this.S1.stack.push(value)
    }
    pop() {
        //write your code here..
        if (this.S2.stack.length == 0) {
            while (!(this.S1.stack.length == 0)) {
                this.S2.stack.push(this.S1.stack.pop())
            }
        }
        return this.S2.stack.pop()
    }
    front() {
        //write your code here..
        if (this.S2.stack.length == 0) {
            return this.S1.stack[0]
        }
        else {
            return this.S2.stack[this.S2.stack.length - 1]
        }
    }
    isEmpty() {
        //write your code here..
    }
}