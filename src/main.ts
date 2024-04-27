class Task {
    description: string
    completed: boolean

    constructor(desc: string) {
        this.description = desc
        this.completed = false
    }
}

class TaskManager {
    tasks: Task[]

    constructor() {
        this.tasks = []
    }

    addTask(desc: string): void {
        this.tasks.push(new Task(desc))
    }

    completeTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = true
        }
    }

    removeTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1)
        }
    }
}