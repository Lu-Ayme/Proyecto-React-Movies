import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop"
import Chart from "./Chart";
import Footer from "./Footer"
import '../assets/css/app.css'


function ContentWrapper() {
    return (
        <>
            <div id="content">
                <TopBar />
                <div className="container-fluid">
                    <ContentRowTop />
                </div>

                <Chart />
                <Footer />
            </div>

        </>
    )
}

export default ContentWrapper