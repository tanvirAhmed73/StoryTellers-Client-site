import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCardMake from "./DetailsCardMake";
const Details = () => {
    const [data, setData] = useState([])

    const {id} = useParams();

    const proDetails = useLoaderData()

    useEffect( ()=>{
        const findData = proDetails.find(perData => perData._id == id)
        setData(findData);
    },[id, proDetails]);
    return (
        <div>
            <DetailsCardMake data= {data}></DetailsCardMake>
        </div>
    );
};

export default Details;