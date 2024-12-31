import BlogCard from "../BlogCard";
import coverImage from "../../../assets/spacejoy-YqFz7UMm8qE-unsplash.jpg";
import "./BlogCardPage.css";

function BlogCardPage() {
  const blogCard = {
    image: {
      url: coverImage,
      alt: "Living Room",
    },
    badges: ["Interior"],
    title: "Top 5 Living Room Inspirations",
    desc: "Curated vibrant colors for your living, make it pop & calm in the same time.",
    link: "blog-card",
  };

  const { image, badges, title, desc, link } = blogCard;

  return (
    <div className="blog-card-page_container">
      <BlogCard
        image={image}
        badges={badges}
        title={title}
        desc={desc}
        link={link}
      />
    </div>
  );
}

export default BlogCardPage;
