import { writable } from 'svelte/store';
import {browser} from '$app/environment';

export const tasks = writable(
    browser && localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks') as string)
        : []
);

tasks.subscribe(value => {
    if (browser) {
        localStorage.setItem('tasks', JSON.stringify(value));
    }
});

export function addTask(task: {date: string, time: string, content: string}) {
    tasks.update(t => [...t, task]);
}

export function removeTask(index: number) {
    tasks.update(t => {
        t.splice(index, 1);
        return t;
    })
};

export function clearTasks() {
    tasks.set([]);
}