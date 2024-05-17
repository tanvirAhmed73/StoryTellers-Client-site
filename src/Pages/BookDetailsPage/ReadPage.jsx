import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReadBookSummary from "./ReadBookSummary";

const ReadPage = () => {
    const [data, setData] = useState([])

    const {id} = useParams();

    const proDetails = useLoaderData()
    useEffect( ()=>{
        const findData = proDetails.find(perData => perData._id == id)
        setData(findData);
    },[id, proDetails]);
    return (
        <div>
             <ReadBookSummary data= {data}></ReadBookSummary>
        </div>
    );
};

export default ReadPage;