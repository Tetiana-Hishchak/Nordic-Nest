import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const useAuthStore = create()(persist((set) => ({
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
    setAuth: (status) => set({ isAuthenticated: status }),
    setTokens: (accessToken, refreshToken) => set({ accessToken, refreshToken }),
    logout: () => set({
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
    }),
}), {
    name: 'auth-storage',
}));
export default useAuthStore;
