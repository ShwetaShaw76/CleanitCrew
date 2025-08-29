import { writable } from 'svelte/store';
import {browser} from '$app/environment';

export const darkMode = writable(browser && localStorage.getItem('darkMode') === 'true' ? true : false);

darkMode.subscribe(value => {
    if(browser){
        localStorage.setItem('darkMode', value.toString());
    }
});

export const sidebarOpen = writable(false);

export const currentPage = writable('home');

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