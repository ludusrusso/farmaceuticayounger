import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return (
      <div>
        <article class="post cnt">
          <h1 class="title"> { entry.getIn(["data", "title"])} </h1>
          <div class="info">
            <p> Pubblicato il XX/XX/XX - Lettura in xx min.</p>
          </div>

          <div class="content">
            { widgetFor("body") }
          </div>
        </article>

        <hr/>
        <h1> Anteprima social </h1>
        <div class="fb-preview">
        <p>{ entry.getIn(["data", "socialDesc"]) }</p>
        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
        <h1> { entry.getIn(["data", "title"])} </h1>
        <p class="description">{ entry.getIn(["data", "description"]) }</p>
        </div>
      </div>

    )
  }
}
