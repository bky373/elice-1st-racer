import { useEffect, useState } from "react";
import Article from "./Article";
import {api_url} from "../env";

export default function Read(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(function(){
        fetch(api_url+'topics/'+props.id)
        .then(function(type){return type.json();})
        .then(function(result){
            setTitle(result.title);
            setDescription(result.description);
        })
    }, [props.id]);
    return <Article title={title} description={description}></Article>
}