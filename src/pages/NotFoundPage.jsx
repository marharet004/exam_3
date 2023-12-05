import { useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <>
            <h1>404 Not Found Page</h1>
            <button onClick={() => {
                navigate(-1);
            }}>Go home</button>
        </>
    );
}

export default NotFoundPage;
