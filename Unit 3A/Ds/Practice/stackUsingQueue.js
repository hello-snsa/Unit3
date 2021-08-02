class Stack {
    constructor() {
        this.Q1 = new Queue()
        this.Q2 = new Queue()
    }
    push(value) {
        this.Q1.queue.push(value)
    }
    pop() {
        while (this.Q1.queue.length > 1) {
            this.Q2.queue.push(this.Q1.queue.shift())
        }
        this.Q2Element = this.Q1.queue.shift()
        this.Q1.queue = this.Q2.queue;
        this.Q2.queue = [];
        return this.Q2Element;
    }
    top() {
        return this.Q1.queue[this.Q1.queue.length - 1]
    }

}