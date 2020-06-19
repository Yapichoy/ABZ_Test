import * as axios from 'axios';

// @ts-ignore
const instance = axios.create({
    baseURL: ""
});

export let getUsers = (nextPage: string) => instance.get( `${nextPage}`).then((response:any) => response.data);