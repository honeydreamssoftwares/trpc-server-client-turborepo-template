'use client'

import type { AppRouter } from '@local/trpc/server/router/_app'
import { createTRPCProxyClient, httpBatchLink } from  "@local/trpc/client"
  function Greeting() {
    const client = createTRPCProxyClient<AppRouter>({
        links: [
          httpBatchLink({
            url: 'http://localhost:3000/api/trpc',

           
          }),
        ],
      });

      const greet =  client.greeting.greeting.query();
      

    return (<div>777</div>)
  }


  export default Greeting;