import { useState } from "react";

export const useCounters = ( initialValue = 10) => {

    const [count, setCount] = useState( initialValue );

    const increment = ( value = 1 ) => {
        setCount( ( current ) => current + value )
    }
    const decrement = ( value = 1 ) => {
        if( count === 0 ) return;
        setCount( ( current ) => current - value )
    }
    const reset = () => {
        setCount( initialValue )
    }

    return {
        count,
        increment,
        decrement,
        reset
    }
}