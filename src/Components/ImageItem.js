function ImageItem({image}) {
    return (
     <div>
        <img className="imageListImg" src={image.urls.small}/>
    </div> 
    );
}

export default ImageItem;