import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

export default function AxiosGet() {
    const [post, setPost] = React.useState(null);

    //TODO useEffect(within or without)
    React.useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
            setPost(response.data);
        });
    //TODO
    }, [post]);

    //TODO
    if (!post) return null;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}