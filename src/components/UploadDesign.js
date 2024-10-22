import React from 'react';

const UploadDesign =({onUpload})=>{
    return(
        <div className="upload-design">
            <input type="file" accept="image/*" onChange={onUpload}/>
        </div>
    );
};
export default UploadDesign;