import * as axios from 'axios';

// @ts-ignore
const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1"
});

// @ts-ignore
export let getUsers = (nextPage: string) => axios.get( `${nextPage}`).then((response:any) => response.data);

export let getPositions = () => instance.get('/positions').then((response:any) => response.data);