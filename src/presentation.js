/* eslint-disable */
// Import React
import React from "react";
import Prism from "prismjs";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Link,
  Deck,
  CodePane,
  Heading,
  ListItem,
  List,
  Image,
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
import preloader from "spectacle/lib/utils/preloader";
// Import theme
//import createTheme from "spectacle/lib/themes/default";
import createTheme from "spectacle-theme-nova";

/* Custom Nova syntax highlighting */
import "spectacle-theme-nova/syntax/prism.nova.css";
// import "spectacle-theme-nova/syntax/prism-javascript";

const images = {
  p1: require("./assets/p1.png"),
  p1_1: require("./assets/p1_1.png"),
  p2_1: require("./assets/p2_1.png"),
  p2_2: require("./assets/p2_2.png"),
  ray_pr: require("./assets/ray_pr.png"),
  rebase_i: require("./assets/rebase_i.png")
};

preloader(images);

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
            merge / rebase and the best practise
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
 [at feature]: git merge master
                  `}
                  margin="20px auto"
                />
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <CodePane
                  lang="js"
                  source={`
 =>        A -> B   ->   C  (master)
                 \\         \\
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
 [at feature]: git rebase master
                  `}
                  margin="20px auto"
                />
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <CodePane
                  lang="js"
                  source={`
 =>        A -> B -> C (master)
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
            Incorporate the feature branch
          </Heading>
          <List>
            <Appear>
              <Image src={images.p1.replace("/", "")} margin="0px auto 40px" />
            </Appear>
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
                  Rebase changes the history of branch; altering the main
                  trunk(master or dev) branch history confuses others
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <Image
                src={images.p1_1.replace("/", "")}
                margin="0px auto 40px"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            On the feat branch and master changed
          </Heading>
          <List>
            <Appear>
              <Image
                src={images.p2_1.replace("/", "")}
                margin="0px auto 40px"
              />
            </Appear>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">
                  Both merge and rebase are appropriate, but we prefer rebase.
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text size={6} textColor="tertiary">
                  Rebase for linear history and clean log.
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <Image
                src={images.p2_2.replace("/", "")}
                margin="0px auto 40px"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Clean up on a non published branch
          </Heading>
          <List>
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
              </Fill>
            </Layout>
            <Appear>
              <ListItem>
                Best practise
                <Text textColor="tertiary">
                  <Code>git rebase -i 'commit'</Code> is what you need..
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Explanation
                <Text size={6} textColor="tertiary">
                  transplant the trivial fix commits to make yourself look
                  better
                </Text>
              </ListItem>
            </Appear>
            <Appear>
              <Text textColor="yellow">git rebase -i HEAD~4 </Text>
            </Appear>
            <Appear>
              <Image
                src={images.rebase_i.replace("/", "")}
                margin="0px auto 40px"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            PR about to merge back
          </Heading>
          <List>
            <Appear>
              <Image
                src={images.ray_pr.replace("/", "")}
                margin="0px auto 40px"
              />
            </Appear>
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
                  Yup, PR is published branch, since it will immediately be
                  merged back and removed, it’s safe to be rebaseed.
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Golden Rule
          </Heading>
          <Markdown>
            {`
* Remember rebase changes the history of branch, \`NEVER\` do it at the branch which may be fetched by other collabrators who plans to continue works upon it.
          `}
          </Markdown>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Rebase Miscellaneous
          </Heading>
          <Markdown>
            {`
* \`git rebase -p\` to preserve the merge commit
* side effect: resovle conflict repeatedly
* yarn.lock conflict
          `}
          </Markdown>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>To be continued</Quote>
            <Cite>
              git branching model by{" "}
              <Link href="https://nvie.com/posts/a-successful-git-branching-model/">
                Vincent Driessen
              </Link>
            </Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
