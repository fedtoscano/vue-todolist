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
        updateTask: function(){
            //aggiorna la task corrente
        },
        modifyTask: function(index){
            this.newTaskContent = this.modifiedTaskContent
            this.todoList[index].text = this.newTaskContent
        },

        toggleTaskDone: function(index){
            this.todoList[index].done=!this.todoList[index].done;
        }
    }
}).mount('#app')
