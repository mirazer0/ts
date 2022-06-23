class TodoItem {
    constructor(id, task, complete) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }

    printDetails() {
        console.log(`#{this.id}\t${this.task}\t${this.complete ? '\t(complete)' : ''}`);
    }
}

const data = [
    {id: 1, task: '장보기', complete: true},
    {id: 2, task: 'TS 학습하기', complete: false},
];

let todoItem = new TodoItem(data[0].id, data[1].task, data[2].complete);
console.log(todoItem);