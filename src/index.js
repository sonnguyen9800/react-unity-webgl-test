import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Unity, { UnityContext } from "react-unity-webgl";
import "./index.css";

class App extends Component {
  constructor() {
    super();

    this.unityContext = new UnityContext({
      codeUrl: "/build/Build.wasm",
      frameworkUrl: "/build/Build.framework.js",
      dataUrl: "/build/Build.data",
      loaderUrl: "/build/Build.loader.js",
    });

  }
  render() {
    return (
      <Fragment>
        <h1>React UnityWebGL</h1>
        <div>

            <Unity unityContext={this.unityContext} />

            <div />
        
        </div>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
