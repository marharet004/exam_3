import backgroundImg from "../img/logo-color.png";
import Search from "../components/search/Search";
// import { useState } from "react";
// import SearchResults from "../components/SearchResultsList";



function Home() {

    return (
        <>
            <Search />
            <div className="heroblock relative -z-10">
                <img src={backgroundImg} className="w-full h-screen object-cover -z-11 " />
            </div>

        </>
    )
}

export { Home as Component };

export default Home;
