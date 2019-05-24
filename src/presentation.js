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
  Table,
  TableHeader,
  TableRow,
  TableHeaderItem,
  TableItem,
  TableBody,
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
  feat_back_1: require("./assets/feat_back_1.png"),
  feat_back_2: require("./assets/feat_back_2.png"),
  rc_to_master: require("./assets/rc_to_master.png"),
  merge_master: require("./assets/merge_master.png"),
  rebase_master: require("./assets/rebase_master.png"),
  hotfix_1: require("./assets/hotfix_1.png"),
  hotfix_2: require("./assets/hotfix_2.png"),
  branch_model: require("./assets/branch_model.png")
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
            branching model
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            A successful Git branching model
          </Heading>
          <List>
            <ListItem>
              "https://nvie.com/posts/a-successful-git-branching-model/"
            </ListItem>
            <Appear>
              <Image
                src={images.branch_model.replace("/", "")}
                margin="20px auto 40px"
                height="480px"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            Branches
          </Heading>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderItem />
                <TableHeaderItem>Naming</TableHeaderItem>
                <TableHeaderItem>Branch off from</TableHeaderItem>
                <TableHeaderItem>Backport to</TableHeaderItem>
                <TableHeaderItem>Lifetime</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>master</TableItem>
                <TableItem>master</TableItem>
                <TableItem>-</TableItem>
                <TableItem>-</TableItem>
                <TableItem>infinite</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>develop</TableItem>
                <TableItem>dev</TableItem>
                <TableItem>master</TableItem>
                <TableItem>-</TableItem>
                <TableItem>infinite</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>feature</TableItem>
                <TableItem>feat_xyz</TableItem>
                <TableItem>dev</TableItem>
                <TableItem>dev</TableItem>
                <TableItem>short</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>hotfix</TableItem>
                <TableItem>hotfix_xyz</TableItem>
                <TableItem>master</TableItem>
                <TableItem>master, dev</TableItem>
                <TableItem>short</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>release candidate</TableItem>
                <TableItem>rc_v3.1.1</TableItem>
                <TableItem>dev</TableItem>
                <TableItem>master, dev</TableItem>
                <TableItem>short</TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            Feature branches
          </Heading>
          <List>
            <ListItem>branch off from dev for feature development</ListItem>
            <ListItem>
              dev branch should be set up with a CI/CD pipeline
            </ListItem>
            <Layout>
              <Fill>
                <Appear>
                  <Image
                    src={images.feat_back_1.replace("/", "")}
                    margin="0px auto 40px"
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Image
                    src={images.feat_back_2.replace("/", "")}
                    margin="0px 10px 20px"
                  />
                </Appear>
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            Features freeze
          </Heading>
          <List>
            <ListItem>create rc branch</ListItem>
            <ListItem>fix defects</ListItem>
            <ListItem>merge to master and tag it</ListItem>
            <Appear>
              <Image
                src={images.rc_to_master.replace("/", "")}
                margin="20px auto 40px"
                height="500px"
              />
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Incorporate the change from master to dev
          </Heading>
          <List>
            <Layout>
              <Fill>
                <Appear>
                  <Text>merge master to dev</Text>
                </Appear>
                <Appear>
                  <Image
                    src={images.merge_master.replace("/", "")}
                    margin="0px auto 40px"
                    height="450px"
                  />
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Text>rebase dev on master</Text>
                </Appear>
                <Appear>
                  <Image
                    src={images.rebase_master.replace("/", "")}
                    margin="0px 10px 20px"
                    height="450px"
                  />
                </Appear>
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Hotfix
          </Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem>create hotfix branch from master</ListItem>
                <ListItem>fix defects</ListItem>
                <ListItem>merge to master and tag it</ListItem>
                <ListItem>merge/rebase the fix back to dev</ListItem>
              </List>
            </Fill>
            <Fill>
              <Appear>
                <Image
                  src={images.hotfix_1.replace("/", "")}
                  margin="20px auto 40px"
                />
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Image
                  src={images.hotfix_2.replace("/", "")}
                  margin="20px auto 40px"
                  padding="5px"
                />
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="secondary">
            Tools
          </Heading>
          <List>
            <ListItem>
              https://danielkummer.github.io/git-flow-cheatsheet/
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you</Quote>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
