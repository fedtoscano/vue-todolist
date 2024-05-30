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
            done: false,
        },
        {
            text:'Comprare il pane',
            done: false,
        },
    ],
    newTaskContent: '',
    modifiedTaskContent:'',
    isModifyOpen: null,

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
        updateTask: function(index){
            //aggiorna la task corrente
            this.todoList[index].text = this.modifiedTaskContent;
            this.modifiedTaskContent=''
        },

        toggleTaskDone: function(index){
            this.todoList[index].done=!this.todoList[index].done;
        }
    }
}).mount('#app')
