import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/:id", // Định nghĩa route với tham số 'id'
    name: "contact.edit", // Tên route cho trang sửa liên hệ
    component: () => import("@/views/ContactEdit.vue"), // Lấy component 'ContactEdit' qua import
    props: true, // Truyền các biến trong $route.params vào làm props cho component
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
