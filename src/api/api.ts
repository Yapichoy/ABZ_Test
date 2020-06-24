import * as axios from 'axios';

// @ts-ignore
const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1"
});

type ResponseType = {
    data: object
}

// @ts-ignore
export let getUsers = (nextPage: string) => axios.get( `${nextPage}`).then((response:ResponseType) => response.data);

export let getPositions = () => instance.get('/positions').then((response:ResponseType) => response.data);