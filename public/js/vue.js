$(document).ready(function() {
    var app = new Vue({
        el: '#app',
        data(){
            return {
                tasks:null,
                errors: null,
                taskName: null,
                taskDescription: null,
                canUpdate:true,
        }
    },
        async created() {
            this.tasks=(await (axios.get(`/api/tasks`))).data ;
            },

        methods: {
            async StoreOrUpdateTask(e) {
                this.canUpdate = false;
                const state = jQuery('#btn-save').val();
                if (state === "add") {
                    try {
                        await axios.post(`/api/tasks`, {
                            name: this.taskName,
                            description: this.taskDescription,
                        })
                    } catch (error) {
                        this.errors = error.response && error.response.data.errors;
                    }
                }
                 else if (state==="update")
                {
                    this.canUpdate = false;
                    var id = jQuery('#task_id').val();
                    try {
                        await axios.put(`/api/tasks/` + id, {
                            name: this.taskName,
                            description: this.taskDescription,
                        })
                    } catch (error) {
                        this.errors = error.response && error.response.data.errors;
                    }
                }
                 },

         async DeleteTask(e) {
            const id=e.target.value;
            await axios.delete( `/api/tasks/`+id )
             location.reload();
        }
        },
    })
});

