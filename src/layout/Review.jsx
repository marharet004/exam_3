import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey } from "../api/config";

function Review() {
    const params = useParams();
    const [picture, setPicture] = useState("");
    useEffect(
        () => {

            fetch(`/api/v1/search?q=id:${params.id}&apikey=${apiKey}`)
                .then(response => response.json())
                .then(data => {
                    setPicture(data);

                    window.localStorage.setItem(
                        `/api/v1/search?q=id:${params.id}&apikey=${apiKey}`,
                        JSON.stringify(data))
                }
                )
                .catch(error => console.error('Error fetching photos:', error));


        }, [params.id])

    return (
        <>

            <div className="relative right-2 p-1">
                <img className="w-10 aspect-video object-cover" src={picture.thumbs.url} alt="" />
                <p className=" absolute bottom-1 left-2 text-white">{picture.resolution}</p>
            </div>
        </>
    );
}

export { Review as Component };

export default Review;
