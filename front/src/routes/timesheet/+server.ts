import type {RequestHandler} from '@sveltejs/kit';
import {timesheetClient} from "../../lib/server/rpcClients";

export const POST: RequestHandler = async ({locals, request}) => {
    const data = await request.json();
    const {response} = await timesheetClient.add(data);
    console.log({time: response.time});
    return new Response(
        JSON.stringify(response.time, (k, v) => (typeof v === 'bigint' ? v.toString() : v))
    );
};

export const GET: RequestHandler = async ({cookies, locals}) => {
    const res = await timesheetClient.get(
        {} as any
    );
    const {times: times} = res.response;

    return new Response(JSON.stringify(times));
};