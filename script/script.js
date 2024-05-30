const { createApp } = Vue

createApp({
    data() {
    return {
        todoList:[{
            text:'Andare a fare la spesa',
            done: false,
        },
        {
            text:'Giocare a scacchi',
            done: false,
        },
        {
            text:'Ascoltare Amnesiac dei Radiohead',
            done: false,
        },
        {
            text:'Comprare le uova',
            done: true,
        },
        {
            text:'Comprare il pane',
            done: false,
        },
    ],
    newTaskContent: '',

    }
    },
    methods: {
        removeTask: function(taskIndex){
            this.todoList.splice(taskIndex, 1)
        },
        addTask: function(){
            if(this.newTaskContent.trim().length >=1){
                const newTask={
                text: this.newTaskContent.trim(),
                done:false
                    };
                this.todoList.push(newTask)
                this.newTaskContent=""
            }
        },
        toggleTaskDone: function(index){
            this.todoList[index].done=!this.todoList[index].done;
        }
    }
}).mount('#app')
