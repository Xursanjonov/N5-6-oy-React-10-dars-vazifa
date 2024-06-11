import { create } from "zustand";
import baseUrl from "../config";
import { toast } from "react-toastify";

const usersStore = create((set) => ({
  users: [],
  isLoading: false,
  error: null,
  //   post user
  createUser: async (newUser) => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.post("/users", newUser);
      set((state) => ({
        users: [...state.users, response.data],
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  //   get user
  getUser: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.get("/users");
      set({ users: response.data, isLoading: false });
    } catch (e) {
      set({ error: e.message, isLoading: false });
    }
  },
  //   update or edit
  updateProduct: async (updatedUser) => {
    set({ isLoading: true, error: null });
    try {
      const response = await baseUrl.put(
        `/users/${updatedUser.id}`,
        updatedUser
      );
      set((state) => ({
        users: state.users.map((user) =>
          user.id === updatedUser.id ? response.data : user
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  //   delete or remove
  deleteUser: async (userId) => {
    set({ isLoading: true, error: null });
    try {
      await baseUrl.delete(`/users/${userId}`);
      set((state) => ({
        users: state.users.filter((user) => user.id !== userId),
        isLoading: false,
      }));
      toast.success(`OK Delete user 🔥`);
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default usersStore;
