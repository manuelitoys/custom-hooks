import { useEffect, useState } from "react"

export const useFecth = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })
  
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })

        const resp = await fetch( url );
        resp.json().then((data) => { 
            setState({
                data,
                isLoading: false,
                hasError: null
            })
        });

    }
    
    useEffect(() => {
      getFetch()
    }, [url])
    
    
     return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError
     }
}
