import type {RequestHandler} from '@sveltejs/kit';
import {timesheetClient} from "../../lib/server/rpcClients";

export const POST: RequestHandler = async ({request}) => {
    const data = await request.json();
    const {response} = await timesheetClient.add(data);
    console.log({time: response.time, data: data});
    return new Response(
        JSON.stringify(response.time, (k, v) => (typeof v === 'bigint' ? v.toString() : v))
    );
};

export const GET: RequestHandler = async ({cookies, locals}) => {
    const res = await locals.timesheetClient.get(
        {} as any,
        {
            meta: {
                Authorization: `Bearer ${cookies.get('jwt')}`
            }
        }
    );

    const {times: times} = res.response;

    return new Response(JSON.stringify(toJson(times?.[0])));
};