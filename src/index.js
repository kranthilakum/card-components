import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.component";
import CardHeader from "./card-header.component";
import CardBody from "./card-body.component";
import CardImage from "./card-image.component";
import CardTitle from "./card-title.component";
import CardText from "./card-text.component";
import CardFooter from "./card-footer.component";
import "./styles.css";

const rootElement = document.getElementById("root");

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <Card>
          <CardHeader title="Card Header goes here ..." />
          <CardBody>
            <CardTitle title="Card Title" />
            <CardImage
              url="https://via.placeholder.com/100"
              name="100 Placeholder"
              caption="100 Placeholder Card Image"
            />
            <CardText text="Card content here ..." />
          </CardBody>
          <CardFooter text="Card footer text here ..." />
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
