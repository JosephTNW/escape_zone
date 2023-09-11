import { writable } from 'svelte/store';

export const contentArray = writable([{
    name: '', 
    hidden: false,
    subArray: [{ name: '', hidden: false, content: '' }] 
}]);

export const qArray = writable([{
    question: '',
    hidden: false,
    answers: ['', '', '', ''],
    correctPos: 0,
}])
