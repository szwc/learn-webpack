<template>
    <div>
        <div>
            <a-input style="width:200px;" v-model:value="editVal" placeholder="Basic usage" />
            <a-button @click="addItem" type="primary">添加</a-button>
        </div>
    </div>
    <div >
        <p v-for="item in todoList">
            <a-checkbox v-model:checked="item.status">{{item.value}}</a-checkbox>
        </p>
    </div>
    <div>{{getDoneNum}}</div>
 </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import todolistSet from "./todoList.js"
  export default defineComponent({
      data(){
        return {
            todoList:[]
        }
      },
    setup() {
    // //     const {
    // //   editVal,
    // //   addItem,
    // //   todoList,
    // // } = todolistSet
    // return {
    //         editVal,
    //   addItem,
    //   todoList,
    //     }
    const {addItem} = todolistSet
      const value = ref('');
      const list = ref([])
      return {
        editVal:value,
        todoList:list
      };
        
    },
    methods: {
        addItem(item){
            // console.log('todolist',this.addItem('aa'));
            console.log('value',this.editVal);
            if(!this.editVal){
                console.log('请输入待办事项');
                return
            }
            this.todoList.push({
                value:this.editVal,
                status:false
            })
            this.editVal = ''
        }
    },
    computed:{
        getDoneNum(){
            return this.todoList.filter(item=>item.status).length
        }
    }
  });
  </script>
  <style>

  </style>