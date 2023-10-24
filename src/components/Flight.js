import React from "react";

export default function Flight({item: {mission_name, launch_year, links: {mission_patch}}, }){

    return(
        <div>
            {mission_name} -- {launch_year}
            <img src={mission_patch} alt="mission_patch"/>
        </div>
    )
}