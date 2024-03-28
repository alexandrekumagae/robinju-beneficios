import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CajuState {
  login: string
  setLogin: (login: string) => void
  totalBalance: number
  setTotalBalance: (totalBalance: number) => void
  currentMenu: string
  setCurrentMenu: (currentMenu: string) => void
}

export const useCajuStore = create<CajuState>()(
  persist(
    (set) => ({
      login: '',
      setLogin: (login) => set(() => ({ login })),
      totalBalance: 100,
      setTotalBalance: (totalBalance) => set(() => ({ totalBalance })),
      currentMenu: 'home',
      setCurrentMenu: (currentMenu) => set(() => ({ currentMenu })),
    }),
    { name: 'cajuStore' },
  ),
)
