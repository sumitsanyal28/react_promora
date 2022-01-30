import React from "react";
import NavBar from "./NavBar";
import SchoolGalleryPage from "./SchoolGalleryPage";
import ProfileGalleryPage from "./ProfileGalleryPage";

function schools(){

    // gotoSchoolGallery=()=> {
    //     let path = `SchoolGalleryPage`;
    //     let history = useHistory();
    //     history.push(path);
      
    return(
        <div className="abc">
            <SchoolGalleryPage />
            {/*<ProfileGalleryPage />*/}
            
        </div>
    )
}

export default schools;