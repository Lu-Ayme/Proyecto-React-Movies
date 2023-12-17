import React from "react";
import TopBar from "./TopBar";
import ContentRowTop from "./ContentRowTop"
import Table from "./tablaDeDatos";
import Footer from "./Footer"
import '../assets/css/app.css'

function ContentWrapper() {
    return (
        <>
            <div id="content">
                <TopBar />
                <div className="container-fluid">
                    <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
                    </div>
                    <ContentRowTop />
                </div>
                <Table />
                <Footer />
            </div>

        </>
    )
}

export default ContentWrapper