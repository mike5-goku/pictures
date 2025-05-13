import ImageShow from "./ImageShow"
import "./ImageList.css"

const ImageList = ({images}) => {
    const rendeImage = images.map((image) => {
return <ImageShow key={image.id} image={image} />
})

return (
<div className="image-list">
{rendeImage}
</div>
)
}

export default ImageList

