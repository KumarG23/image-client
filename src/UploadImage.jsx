import React, { useContext, useState } from 'react'
import { AuthContext } from './context'
import { createImage } from './api'

const UploadImage = () => {
    const { auth } = useContext(AuthContext)
    const [image, setImage] = useState(undefined)
    const [title, setTitle] = useState('')
    
    const submit = () => {
        createImage({
            auth,
            title,
            image,
        })
        .then(response => {
            console.log('Upload image: ', response)
        })
        .catch(error => console.log('error: ', error))
    }
    
    return (
    <div id='upload'>
        <h1>Upload Image</h1>
        <div>Image Title</div>
        <input 
        onChange={e => setTitle(e.target.value)}
        value={ title }
        />

        <div>
            <input
            accept='image/*'
            type='file'
            onChange={e => setImage(e.target.files[0])}
            />
            <div>
                <button onClick={() => submit()}>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default UploadImage
