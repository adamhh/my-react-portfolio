import './gridItem.css'

export default function GridItem(props) {
    const { name, description, isGithubLink, link, imagePath } = props;
    return (
        <>
        <div className="gridItem">
            <div className="item">
                <div className="item-image">
                    <img src={imagePath} alt="Portfolio snapshot"/>
                </div>
                <ul className="social-icons">
                    <li><a href={link} target={"_blank"} rel={"noopener noreferrer"}>
                        {isGithubLink ? (
                            <i className="fa fa-github-square"/>
                        ) :
                        (
                            <i className="fa fa-external-link-square"/>
                        )}
                        </a>
                    </li>
                </ul>
                <div className="details">
                    <h2>{name}:<span className="description">{description}</span></h2>
                </div>
            </div>
        </div>
        </>
    )
}