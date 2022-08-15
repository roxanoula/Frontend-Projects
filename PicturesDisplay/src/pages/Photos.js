import React, {useContext} from "react"
import {Context} from "../Context"
import Image from "../Components/Image"
import {getClass} from "../utils"

function Photos() {
    const {allPhotos} = useContext(Context)
    const images = allPhotos.map(
        (photo, idx) => ( <Image key={photo.id} img={photo} className={getClass(idx)}/> )
    )
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos