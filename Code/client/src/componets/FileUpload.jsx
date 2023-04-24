import React from 'react'
import {TbUpload} from "react-icons/tb"

import './FileUpload.scss'

function FileUpload(files, setFiles) {
    const uploadHandler =(event) =>{
      const file = event.target.files[0];
      file.isUploading = true;
      setFiles([...files, file])

      const formData = new FormData();
      formData.append(
        file.name,
        fiel,
        file.name
      )

      axios.post("http://localhost:3000/upload", formData)
    }
  return (
    <>
        <div className="file-card">
            <div className="file-inputs">
                <input type ="file"  onChange={uploadHandler}/>
                <button className='font-poppins'>
                <i>
                <TbUpload></TbUpload>
                </i>
                Browse File
                </button>
            </div>

            <p className='main font-poppins'> Supported Formats</p>
            <p className='info font-poppins'>PDF, JPG, PNG</p>
        </div>
    </>
  )
}

export default FileUpload