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
  feat_xyz: require("./assets/feat_xyz.png"),
  feat_abc_merge: require("./assets/feat_abc_merge.png"),
  feat_abc_rebase: require("./assets/feat_abc_rebase.png"),
  master: require("./assets/master.png"),
  merge_back_dev: require("./assets/merge_back_dev.png"),
  rebase_on_master: require("./assets/rebase_on_master.png"),
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
            branching model
          </Text>
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
                <TableHeaderItem>Merge back to</TableHeaderItem>
                <TableHeaderItem>Lifetime</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>master</TableItem>
                <TableItem>master</TableItem>
                <TableItem>NA</TableItem>
                <TableItem>NA</TableItem>
                <TableItem>infinite</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>dev</TableItem>
                <TableItem>dev</TableItem>
                <TableItem>NA</TableItem>
                <TableItem>NA</TableItem>
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
            Trunk branches
          </Heading>
          <List>
            <ListItem>
              create feat_xyz and feat_abc from the initial commit of dev
            </ListItem>
            <Appear>
              <ListItem>
                merge feat_xyz back
              </ListItem>
            </Appear>
            <Appear>
              <Image src={images.feat_xyz.replace("/", "")} margin="0px auto 40px"  width="680px"/>
            </Appear>
            <Layout>
              <Fill>
                <Appear>
                  <Text>merge feat_abc back without rebase</Text>
                </Appear>
                <Appear>
                  <Image src={images.feat_abc_merge.replace("/", "")} margin="0px auto 40px"/>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Text>merge feat_abc back with rebase first</Text>
                </Appear>
                <Appear>
                  <Image src={images.feat_abc_rebase.replace("/", "")} margin="0px 10px 20px"/>
                </Appear>
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} caps textColor="secondary">
            Ready to UAT
          </Heading>
          <List>
            <ListItem>
              create rc branch
            </ListItem>
            <ListItem>
              fix defects
            </ListItem>
            <ListItem>
              merge to master and tag it
            </ListItem>
            <Appear>
              <Image src={images.master.replace("/", "")} margin="20px auto 40px" width="680px"/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Incorporate the change to dev
          </Heading>
          <List>
            <Layout>
              <Fill>
                <Appear>
                  <Text>merge master to dev</Text>
                </Appear>
                <Appear>
                  <Image src={images.merge_back_dev.replace("/", "")} margin="0px auto 40px"/>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <Text>rebase dev on master</Text>
                </Appear>
                <Appear>
                  <Image src={images.rebase_on_master.replace("/", "")} margin="0px 10px 20px"/>
                </Appear>
              </Fill>
            </Layout>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary">
            Hotfix
          </Heading>
          <List>
            <ListItem>
              create hotfix branch from master
            </ListItem>
            <ListItem>
              fix defects
            </ListItem>
            <ListItem>
              merge to master and tag it
            </ListItem>
            <ListItem>
              merge the fix back to dev(or rebase?)
            </ListItem>
            <Appear>
              <Image src={images.master.replace("/", "")} margin="20px auto 40px" width="680px"/>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Thank you</Quote>
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
