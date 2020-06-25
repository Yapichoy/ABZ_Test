import * as axios from 'axios';

// @ts-ignore
const instance = axios.create({
    baseURL: "https://frontend-test-assignment-api.abz.agency/api/v1",
    //withCredentials: true,
    headers: {
        "Token": "eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ==",
    },
});

type ResponseType = {
    data: object
}

// @ts-ignore
export let getUsers = (nextPage: string) => axios.get( `${nextPage}`).then((response:ResponseType) => response.data);

export let getPositions = () => instance.get('/positions').then((response:ResponseType) => response.data);