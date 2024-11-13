import image from './../assets/images/rick-sanchez.gif';

const Loading = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <img id="img-loading" src={image} alt="loading" />
        </div>
    )
}
export default Loading;