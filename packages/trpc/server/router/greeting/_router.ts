import { publicProcedure, router } from "../../trpc";
export const greetingRouter = router({
    greeting: publicProcedure.query(() => 'hello tRPC v10!'),
  })