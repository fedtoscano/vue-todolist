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
    ]
    }
    },
    methods: {}
}).mount('#app')
