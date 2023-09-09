"use client";

import { trpc } from "../utils/trpc";

function Greeting() {
  const greet = trpc.greeting.useQuery();

  if (greet.isLoading) {
    return <div>Loading...</div>;
  }

  if (greet.error) {
    return <div>Error: {greet.error.message}</div>;
  }

  return <div>{greet.data}</div>;
}


export default Greeting;
