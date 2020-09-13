import React,{useEffect,useState} from 'react'
import { useStateValue } from './StateProvider'
export default function useApiQuery(pageNumber) {
    const[loading,setLoading] = useState(false);
    const[{items},dispatch] = useStateValue();



    useEffect(() => {
    setLoading(true)
    fetch(`https://api.stackexchange.com/2.2/questions?page=${pageNumber}&pagesize=30&order=desc&sort=hot&site=stackoverflow`)
    .then(res =>res.json())
    .then(result => {
        // setItems(result.items)
        dispatch({
            type:"ADD_ITEMS",
            item:[...result.items],
        });
        setLoading(false)
    })
    },[pageNumber])
    return {loading};
}
