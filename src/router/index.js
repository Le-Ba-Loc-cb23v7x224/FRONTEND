import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/contacts/add", // Định nghĩa route cho trang thêm liên hệ
    name: "contact.add", // Đặt tên cho route
    component: () => import("@/views/ContactAdd.vue"), // Import trang ContactAdd.vue
  },
  {
    path: "/contacts/:id", 
    name: "contact.edit", 
    component: () => import("@/views/ContactEdit.vue"), 
    props: true, 
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
