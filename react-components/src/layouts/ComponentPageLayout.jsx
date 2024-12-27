import { Outlet } from "react-router";

function ComponentPageLayout() {
  return (
    <>
      <Outlet />
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/annabel-anh"
          target="_blank"
        >
          annabel-anh
        </a>
        .
      </div>
    </>
  );
}

export default ComponentPageLayout;
