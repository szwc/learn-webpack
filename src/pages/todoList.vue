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
  import { defineComponent, ref,computed } from 'vue';
  import todolistSet from "./todoList.js"
  console.log('todolistSet',todolistSet);
  export default defineComponent({
      data(){
        return {
            // todoList:[]
        }
      },
    setup() {
      const editVal = ref("");
      const count = ref(0)
      const todoList = ref([{ value: "abc", status: false }]);

      const addItem = (val) => {
          console.log('val',val);
          console.log('editVal',editVal);
          let value = editVal.value
        let item = {
          value: value,
          status: false,
        };
        todoList.value.push(item);
      };
      let getDoneNum = computed(()=>todoList.value.filter(item=>item.status==true).length)

      return {
        editVal,
        addItem,
        todoList,
        getDoneNum,
        count
      };
    },
    mounted() {
      console.log('count',this.count)
    },
  });
  </script>
  <style>

  </style>