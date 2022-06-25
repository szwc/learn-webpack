import home from "../pages/home.vue";
import list from "../pages/list.vue";
import todoList from "../pages/todoList.vue";
import setup from "../pages/setup.vue";
const routes = [
  // {

  //   path: "/",
  //   // redirect: "/",
  //   children: [

  //   ],
  // },
  {
    path: "/home",
    component: home,
  },
  { path: "/list", component: list },
  { path: "/todolist", component: todoList },
  { path: "/setup", component: setup },
];
export default routes;
