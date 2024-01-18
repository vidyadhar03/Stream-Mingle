import { useSearchParams } from "react-router-dom"

export const Room = ()=>{
    const [searchParams,setSeachParams] = useSearchParams();
    const name = searchParams.get('name');

    return(<div>
        Hi {name}
    </div>)
}