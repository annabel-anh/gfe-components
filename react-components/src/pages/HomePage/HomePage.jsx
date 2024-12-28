import { Link } from "react-router";

function HomePage() {
  const links = [
    { to: "badge", label: "Badge" },
    { to: "blog-card", label: "Blog Card" },
  ];

  return (
    <>
      <h1>Components</h1>
      {links.map((link) => {
        return (
          <Link to={`${link.to}`} key={link.to}>
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default HomePage;
