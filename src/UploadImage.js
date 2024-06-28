import React, { useState } from 'react';
import { uploadImage, viewImage } from './apiService';

const UploadImage = () => {
    const [file, setFile] = useState(null);
    const [imageName, setImageName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            try {
                const response = await uploadImage(file);
                setImageName(file.name);
                setImageUrl(viewImage(file.name));
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <div>
            <h2>Image Upload</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {imageUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={imageUrl} alt={imageName} width="300" />
                </div>
            )}
        </div>
    );
};

export default UploadImage
