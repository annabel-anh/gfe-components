import Badge from "../badge/Badge.jsx";
import "./BlogCard.css";
import { FaArrowRight } from "react-icons/fa";

function BlogCard({ image, badges, title, desc, link }) {
  const badgesList = badges.map((text) => {
    return (
      <Badge key={text} size="md" color="success">
        {text}
      </Badge>
    );
  });

  return (
    <div className="blog-card">
      <img src={image.url} alt={image.altText} className="blog-card__image" />
      <div className="blog-card__content">
        <div className="blog-card__header">
          <p className="blog-card__title">{title}</p>
          <div className="blog-card__badges">{badgesList}</div>
        </div>
        <div className="blog-card__body">
          <p className="blog-card__desc">{desc}</p>
          <a className="blog-card__link" href={link}>
            <span>Read more</span>
            <span>
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
