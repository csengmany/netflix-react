const Movie = ({ category, images }) => {
    let regex = /(?!\/)\w+.jpg/;

    return (
        <div className="section">
            <div>{category}</div>

            <div>
                {images.map((url, index) => {
                    return (
                        <img
                            className="picture"
                            key={index}
                            src={url}
                            alt={url.match(regex).join().split("_").shift()}
                        />
                    );
                })}
                <div className="shadow"></div>
            </div>
        </div>
    );
};
export default Movie;
