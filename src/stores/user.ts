import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: ''
  }),
  actions: {
    save(name: string) {
      this.user = name
    }
  }
})
