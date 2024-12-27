import "./BadgesPage.css";
import Badge from "../../components/badge/Badge";

function BadgesPage() {
  const badgeProps = {
    color: ["neutral", "error", "warning", "success", "brand"],
    size: ["sm", "md", "lg"],
  };

  return (
    <div className="badges_container">
      {badgeProps.color.map((color, index) => {
        return (
          <div className="badges_row" key={index}>
            {badgeProps.size.map((size) => {
              return (
                <Badge size={size} color={color} key={`${size}-${color}`}>
                  Label
                </Badge>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default BadgesPage;
