import { defineStore } from 'pinia'

export const useEntriesStore = defineStore('entries', {
    state: () => ({
        entries: [] as Array<{ date: string; wins: string; struggles: string; notes: string}>
    }),
    actions: {
        addEntry(entry) {
            this.entries.unshift(entry)
        }
    }
})