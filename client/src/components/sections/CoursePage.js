import React from 'react'
import { useLocation } from 'react-router-dom';





const CoursePage = (props) => {

    const courses = [
        { id: 1, Title: "Limit", Author: "Misbah Bilgili", Subject: "Math", Level: "Beginner", Language: "Turkish", Thumbnail: "https://picsum.photos/id/1/200/250" },
        { id: 2, Title: "Integrals", Author: "Barış Anılır", Subject: "Math", Level: "Beginner", Language: "Turkish", Thumbnail: "https://picsum.photos/id/1/200/250" },
        { id: 3, Title: "Data Science", Author: "Fuat Akal", Subject: "Math", Level: "Beginner", Language: "Turkish", Thumbnail: "https://picsum.photos/id/1/200/250" },
        { id: 4, Title: "Limit2", Author: "Barış Anılır", Subject: "Math", Level: "Beginner", Language: "Turkish", Thumbnail: "https://picsum.photos/id/1/200/250" }
    ]


    //const courseId = window.location.pathname.match(/\/topic\/(\d+)/)[1]; //We just need courses[courseId-1] in this page





    return (
        <div>
            <h1>Merhaba</h1>
            <h1></h1>
            {/* add additional information about the course */}
        </div>
    );
};

export default CoursePage
