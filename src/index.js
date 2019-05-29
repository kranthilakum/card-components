import React from "react";
import ReactDOM from "react-dom";
import Card from "./card.component";
import CardHeader from "./card-header.component";
import CardBody from "./card-body.component";
import CardImage from "./card-image.component";
import CardTitle from "./card-title.component";
import CardText from "./card-text.component";
import CardFooter from "./card-footer.component";
import holder from "holderjs";
import "./styles.css";

const rootElement = document.getElementById("root");

class App extends React.Component {
  render() {
    return (
      <div className="card">
        <Card>
          <CardHeader text="Card Header goes here ..." />
          <CardBody>
            <CardImage
              url="holder.js/400x200"
              name="100 Placeholder"
              caption="100 Placeholder Card Image"
            />
            <div className="px-6 py-4">
              <CardTitle title="Card Title" />
              <CardText
                text="Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil."
              />
            </div>
          </CardBody>
          <CardFooter text="Card footer text here ..." />
        </Card>
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElement);
