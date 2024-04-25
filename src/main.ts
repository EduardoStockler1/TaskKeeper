class Task{    
    description: string 
    completed:boolean
    
    constructor(desc: string) {
        this.description = desc
        this.completed = false
    }
}

class TaskManager{
    tasks: Task[]

    constructor(){
        this.tasks = []
    }

    addTask(desc: string): void {
        this.tasks.push(new Task(desc))
    }

    completeTask(index: number): void{
        if(index >= 0 && index < this.tasks.length){
            this.tasks[index].completed = true 
        }
    }

    removeTask(index: number): void{
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        }
    }

    displayTasks(): void {
        console.log("Lista de Tarefas:");
        this.tasks.forEach((task, index) => {
            console.log((index + 1) + ". " + (task.completed ? "[X]" : "[ ]") + " " + task.description);
        });
    }
}

const taskManager = new TaskManager();
taskManager.addTask("Fazer o exercício de TypeScript");
taskManager.addTask("Estudar JavaScript");
taskManager.displayTasks();
taskManager.completeTask(0);
taskManager.removeTask(1);
taskManager.displayTasks();