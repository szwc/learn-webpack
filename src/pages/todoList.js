import { ref, onMounted } from "vue";

export default {
  props: {
    // user: {
    //   type: String,
    //   required: true,
    // },
  },
  setup(props) {
    const editVal = ref("");
    let count = ref(0);
    const todoList = ref([{ value: "abc", status: false }]);

    const addItem = (val) => {
      let item = {
        value: val,
        status: false,
      };
      todoList.push(item);
    };

    return {
      editVal,
      addItem,
      todoList,
      count,
    };
  },
  // 组件的“其余部分”
};
