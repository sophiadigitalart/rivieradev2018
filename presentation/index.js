// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// codeslide from https://github.com/thejameskyle/spectacle-code-slide
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";

const cursor = { show: true, blink: true, element: "|", hideWhenDone: true, hideWhenDoneDelay: 1000 };

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  sdalogo: require("../assets/sdalogo.png"),
  vdlogo: require("../assets/videodromm-logo.jpg"),
  force: require("../assets/force.jpg"),
  kodelife: require("../assets/kodelife.jpg"),
  ws: require("../assets/websocket.jpg"),
  webgl: require("../assets/webgl.jpg"),
  neo: require("../assets/neo.jpg"),
  circle: require("../assets/circle.jpg"),
  formidablelogo: require("../assets/formidable-logo.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#220022",
  secondary: "#c9ca00",
  tertiary: "yellow",
  quartenary: "red"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="black">
            <Heading size={1} fit caps lineHeight={1} >
              Live coding shaders
            </Heading>
            <Heading size={4}  caps textColor="secondary">
              Sophia Digital Art
            </Heading>
            <Image width="40%" src={images.sdalogo} />
            <Text textSize="1.5em" margin="20px 0px 0px" bold>By Bruce LANE</Text>
          </Slide>
          
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Fragment shaders</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Runs on GPU
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  C-style syntax
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="primary">
            <Heading size={4} caps fit textColor="tertiary"><code>Fragment Shader</code></Heading>
            <Terminal title="bruce@sophiadigitalart.com" output={[
              <Typist cursor={cursor}>uniform vec2 iResolution; // variable</Typist>,
              <Typist cursor={cursor}>void main() // entry point</Typist>,
              <Typist cursor={cursor}>vec2 uv = gl_FragCoord.xy/iResolution.xy-0.5; // normalize and center</Typist>,
              <Typist cursor={cursor}>gl_FragColor = vec4(red, green, blue, alpha); // center</Typist>,
              <div>
                <div style={{ color: "#33B969" }}>info: Let's try it!</div>
                
              </div>]}
            />
          </Slide>
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/example.frag")}
            ranges={[
              { loc: [0, 1968], title: "Shader source example" },
              { loc: [0, 1], title: "Variable: iResolution" },
              { loc: [0, 1], note: "Viewport resolution: vec3(1280.0, 720.0, 0)" },
              { loc: [1, 2], title: "Variable: time from start" },
              { loc: [1, 2], note: "shader playback time (in seconds)" },
              { loc: [3, 4], title: "main entry point" },
              { loc: [3, 4], note: "in: coordinates, out: color" },
              { loc: [5, 6], title: "normalize the drawing area" },
              { loc: [5, 6], note: "uv.x and uv.y from 0.0 to 1.0" },
              { loc: [7, 8], title: "color animation" },
              { loc: [7, 8], image: images.webgl },
              { loc: [7, 8], image: images.neo }
            ]}
          />
          <CodeSlide
            transition={["slide"]}
            lang="js"
            code={require("raw!../assets/circle.frag")}
            ranges={[
              { loc: [0, 1968], title: "Circle example" },
              { loc: [4, 5], title: "center the drawing" },
              { loc: [4, 5], note: "uv.x and uv.y now from -0.5 to 0.5" },
              { loc: [5, 6], title: "length = distance from center" },
              { loc: [5, 6], note: "circ = 4.0 in the center, 0.0 on the sides" },
              { loc: [6, 7], note: "red and green computed from circ" },
              { loc: [6, 7], image: images.circle },
              { loc: [7, 8], image: images.neo }
            ]}
          />



<Slide transition={["fade"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              The Force
            </Heading>
            <Link target="_new" href="https://videodromm.com/w3cContest/">

              <Image width="70%" src={images.force}/>
              <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>The force runs in the browser, shader editor.</Text>
            </Link>
          </Slide>

<Slide transition={["fade"]} bgColor="black">
            <Heading size={1}  textColor="secondary">
              KodeLife
            </Heading>
            <Image width="40%" src={images.kodelife}/>
            <Text textSize="1.2em" textColor="white" margin="20px 0px 0px" bold>Real-time GPU shader editor, live-code performance tool and graphics prototyping sketchpad.</Text>
          </Slide>

          <Slide transition={["zoom"]} bgColor="primary" textColor="tertiary">
            <Heading size={6} textColor="secondary" caps>Ressources</Heading>
            <List>
              <ListItem><a target="_blank" href="https://thebookofshaders.com/?lan=fr">TheBookOfShaders.com</a> by Patricio Gonzalez Vivo</ListItem>
              <ListItem><a target="_blank" href="https://github.com/patriciogonzalezvivo/glslEditor">GLSL editor</a> by Patricio Gonzalez Vivo</ListItem>
              <ListItem><a target="_blank" href="https://shawnlawson.github.io/The_Force/">The_Force</a> by Shawn Lawson</ListItem>
              <ListItem><a target="_blank" href="https://www.shadertoy.com/view/Md23DV">Shadertoy.com</a> by Inigo Quilez</ListItem>
              <ListItem><a target="_blank" href="https://hexler.net/software/kodelife/">KodeLife</a> by Rob Fischer</ListItem>
            </List>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="black">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Videodromm open source project
            </Heading>
            <Link target="_new" href="https://github.com/videodromm">
              <Text bold caps textColor="tertiary">View on Github</Text>
              <Image width="70%" src={images.vdlogo}/>
            </Link>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with Spectacle from
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.formidablelogo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
