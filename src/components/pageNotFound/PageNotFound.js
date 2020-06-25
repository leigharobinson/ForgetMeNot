import React from "react";
import notFound from "../pageNotFound/images/notFound.jpg";
import "./PageNotFound.css";
class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found </h1>
        <img alt="SpaceMan and nubmer 404" class="notFound" src={notFound} />
        <p style={{ textAlign: "center" }}></p>
      </div>
    );
  }
}
export default PageNotFound;
