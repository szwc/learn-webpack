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
    const todoList = ref([{ value: "abc", status: false }]);

    const addItem = (val) => {
      let item = {
        value: val,
        status: false,
      };
      todoList.push(item);
    };

    // onMounted(getUserRepositories); // 在 `mounted` 时调用 `getUserRepositories`

    return {
      editVal,
      addItem,
      todoList,
    };
  },
  // 组件的“其余部分”
};
