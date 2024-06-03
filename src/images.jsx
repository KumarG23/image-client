import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context'
import { getImages } from './api'

export const Images = () => {
    const [images, setImages] = useState([])
    const { auth } = useContext(AuthContext)

    useEffect(() => {
        if (auth.accessToken) {
            getImages({ auth })
                .then(response => {
                    console.log('Get Images: ', response)
                    setImages(response.data)
                })
                .catch(error => console.log('error: ', error))
        }
    }, [auth.accessToken])


  return (
    <div style={{ marginTop: 20 }} className='text-light'>
    <hr />
    <h1>Images</h1>
    {images && images.map(image => (
        <div key={image.id} id='images'>
            <h4>{image.title}</h4>
            <img
                src={`http://127.0.0.1:8000/${image.image}`}
                style={{ width: '30%' }}
                alt={image.title}
            />
        </div>
    ))}
</div>

  )
}

export default Images
