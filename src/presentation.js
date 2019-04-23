/* eslint-disable */
// Import React
import React from "react";
import Prism from "prismjs";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  CodePane,
  Heading,
  ListItem,
  List,
  Notes,
  Quote,
  Slide,
  Text,
  Markdown,
  Appear,
  Layout,
  Fill,
  Code
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

/* Custom Nova syntax highlighting */
import "spectacle-theme-nova/syntax/prism.nova.css";
// import "spectacle-theme-nova/syntax/prism-javascript";

// Require CSS
// require("normalize.css");

//import { theme } from "spectacle-theme-solarized-light";
import { prismLight } from "spectacle/lib/themes/default";
import { prismDark } from "spectacle/lib/themes/default";
const theme = createTheme(null, {
  prism: {
    light: prismLight,
    dark: prismDark
  }
});
/* const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
); */

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Git flow
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            merge or rebase and when to use them
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Difference
          </Heading>
          <List>
            <ListItem>Merge</ListItem>
            <ListItem>Rebase</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={3}> Merge</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={`
    A -> B -> C (master)
         \\
          D -> E (feature)
                  `}
                margin="20px auto"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  lang="js"
                  source={`
==>        A -> B   ->   C  (master)
                \\        \\
                 D -> E -> F (feature)
                  `}
                  margin="20px auto"
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={3}> Rebase</Heading>
          <Layout>
            <Fill>
              <CodePane
                lang="js"
                source={`
    A -> B -> C (master)
          \\
           D -> E (feature)
                  `}
                margin="20px auto"
              />
            </Fill>
            <Appear>
              <Fill>
                <CodePane
                  lang="js"
                  source={`
==>        A -> B -> C (master)
                      \\      
                       D -> E (feature)
                  `}
                  margin="20px auto"
                />
              </Fill>
            </Appear>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Scenarios
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            bring the feature branch back to master
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">Always use merge.</Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text textColor="tertiary">
                  Rebase changes the history of branch; altering the master
                  branch history confuses others
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            On the feat branch and master changed
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">
                  Both merge and rebase are appropriate.
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text size={6} textColor="tertiary">
                  Rebase for linear history and clean log; merge for keep the
                  historical context.
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Clean up on a non published branch
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">
                  <Code>git rebase -i</Code> is what you need..
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text size={6} textColor="tertiary">
                  Fix commits everytwhere
                </Text>
              </ListItem>
            </Appear>
          </List>

          <Layout>
            <Fill>
              <Appear>
                <CodePane
                  lang="js"
                  textColor="gray3"
                  source={`
    121ca50 Fix another typo
    b253d57 Fix typo
    60bfba2 Add forgot config files
    ae6058c Implement feature
                  `}
                  margin="20px auto"
                />
              </Appear>
              <Appear>
                <Text textColor="yellow">git rebase -i HEAD~4 </Text>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            PR about to merge back
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">
                  Good timing to use rebase to clean up
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text size={6} textColor="tertiary">
                  yeah, PR is published branch, since it will immediately be
                  merged back and removed, it’s safe to be rebaseed.
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Clean up on a non published branch
          </Heading>
          <Markdown>
            {`
* No clear standard yet
* Inline \`styling\`?
* FOUC - Extract CSS
* [CSS Modules](https://github.com/css-modules) - Solves CSS globalization
          `}
          </Markdown>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Clean up on a non published branch
          </Heading>
          <List>
            <ListItem>
              <Text size={6} textColor="tertiary">
                Best practise: `git rebase -i` is what you need.
              </Text>
            </ListItem>
            <ListItem>
              <Text size={6} textColor="tertiary">
                Explanation: It’s not rare that you finished some works in a
                commit, and realized you forgot to add some files! or typo
                somewhere. Then you make more commits for those fixs and your
                git log looks rather ugly as follows
              </Text>
            </ListItem>
          </List>
          <BlockQuote>
            <Quote textSize={25}>121ca50 Fix another typo</Quote>
            <Quote textSize={25}>b253d57 Fix typo</Quote>
            <Quote textSize={25}>60bfba2 Add forgot config files</Quote>
            <Quote textSize={25}>ae6058c Implement feature</Quote>
          </BlockQuote>
        </Slide>
        <CodeSlide
          transition={[]}
          color="white"
          // textSize={25}
          lang="js"
          code={require("raw-loader!./assets/code.js")}
          ranges={[
            { loc: [0, 10], title: "Walking through some code" },
            { loc: [0, 1], title: "The Beginning" },
            { loc: [1, 2] },
            { loc: [2, 3], note: "Heres a note!" },
            { loc: [4, 6], note: "Heres a note again!" },
            { loc: [8, 10] }
          ]}
        />
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
