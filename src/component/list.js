import React from 'react';

const List = (props) => {

    const images = props.images.map(image => {
        
        return <img key={image.id} src={image.webformatURL}/>
    })

    return (
        <div>
           {images}
        </div>
    );
};

export default List;