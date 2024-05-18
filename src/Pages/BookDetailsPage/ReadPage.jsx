import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ReadBookSummary from "./ReadBookSummary";
import SharedNAvbar from "../../SharedItem/SharedNavbar/SharedNAvbar";

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
            <SharedNAvbar></SharedNAvbar>
             <ReadBookSummary data= {data}></ReadBookSummary>
        </div>
    );
};

export default ReadPage;