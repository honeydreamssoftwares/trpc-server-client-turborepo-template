import { router } from '.././trpc';
import { greetingRouter } from './greeting/_router';
export const appRouter = router({
  greeting: greetingRouter,
});
 
// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;