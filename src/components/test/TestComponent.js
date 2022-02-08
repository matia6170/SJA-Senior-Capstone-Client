import React from "react";
import { useParams } from "react-router-dom";

export default function TestComponent(){
    let {id} = useParams();
    return <div>
        {id}
    </div>
}