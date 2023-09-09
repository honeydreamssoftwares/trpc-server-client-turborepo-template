'use client'

import {trpc} from '../utils/trpc'


  function Greeting() {

            const greet =  trpc.greeting.greeting.useQuery();
            console.log("greet",greet.data)

    return (<div>ok</div>)
  }


  export default Greeting;