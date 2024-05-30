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
            const newTask={
                text: this.newTaskContent,
                done:false
            }

            this.todoList.push(newTask)
            this.newTaskContent=""
        }
    }
}).mount('#app')
