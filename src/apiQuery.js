import React,{useEffect,useState} from 'react'
import { useStateValue } from './StateProvider'
export default function useApiQuery() {
    const[loading,setLoading] = useState(false);
    const[{items,page},dispatch] = useStateValue();
    


    useEffect(() => {
    setLoading(true)
    fetch(`https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=30&order=desc&sort=hot&site=stackoverflow`)
    .then(res =>res.json())
    .then(result => {
        // setItems(result.items)
        dispatch({
            type:"ADD_ITEMS",
            item:[...result.items],
        });
        setLoading(false)
    })
    },[page])

    return {loading};
}
