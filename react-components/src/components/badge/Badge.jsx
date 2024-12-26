import "./Badge.css";

function Badge({ size, color, children }) {
  return (
    <span className={`badge badge_size_${size} badge_color_${color}`}>
      {children}
    </span>
  );
}

export default Badge;
