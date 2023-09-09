import {createNextApiHandler}  from "@local/trpc/server/createNextApiHandler";
import { greetingRouter } from "@local/trpc/server/router/greeting/_router";



export default createNextApiHandler(greetingRouter);
