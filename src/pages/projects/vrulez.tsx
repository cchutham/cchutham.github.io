import { OutboundLink } from "gatsby-plugin-google-analytics";
import * as React from "react";
import { Col, Container, Row } from "reactstrap";
import { ProjectLayout } from "../../components/project-layout";
import { ProjectPageProps } from "../../models/project-page-props";
import { withPrefix } from "gatsby-link";

export default class VrulezPage extends React.Component<ProjectPageProps, {}> {
  public render() {
    return (
      <ProjectLayout
        allProjects={this.props.data.allProjects.edges.map(e => e.node)}
        currentProject={this.props.data.project.edges[0].node}
        mainImage={this.props.data.mainImage.childImageSharp.sizes}
      >
        <Container>
          <Row>
            <Col className="text-center">
              <OutboundLink
                href="https://vrulez.com"
                target="_blank"
                className="btn"
              >
                Visit the site
              </OutboundLink>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Landing Pages.</h3>
              <p>
                Landing pages allow users to quickly scroll through pages,
                getting a big picture of what the business is about.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/1.png`
                )}
                alt="VRulez landing page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/3.png`
                )}
                alt="VRulez landing/franchise page"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="5">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/2.png`
                )}
                alt="VRulez landing page"
                className="img-fluid"
              />
            </Col>
            <Col lg="5">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/4.png`
                )}
                alt="VRulez landing/franchise page"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>About Page.</h3>
              <p>
                To learn more about the business, site visitors can select
                "about", displayed on the nav bar at the top of the site page.
                This page provides information regarding to services that
                customers can expect to receive when choosing to play VR games
                at VRulez.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/about.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Game Page.</h3>
              <p>
                List of games offered at each store location are displayed on
                this page. Users can choose the store location from the drop
                down list and click on a specific game to get more information.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/games.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Location Page.</h3>
              <p>
                Store address, hours, contact information and embedded Google
                Maps are available on this page.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/location.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="10">
              <h3>Contact Page.</h3>
              <p>
                Contact form is available for the users to send any inquiry to
                the store.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg="6">
              <img
                src={withPrefix(
                  `/images/${
                    this.props.data.project.edges[0].node.imageFolder
                  }/contact.png`
                )}
                alt="Work Breakdown Structure of Craft Beer Ordering System"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </ProjectLayout>
    );
  }
}

export const pageQuery = graphql`
  query VrulezQuery($path: String!) {
    allProjects: allProjectsJson {
      ...ProjectFields
    }
    project: allProjectsJson(filter: { url: { eq: $path } }) {
      ...ProjectFields
    }
    mainImage: file(relativePath: { eq: "Vrulez/main.png" }) {
      ...MainImageSizes
    }
  }
`;
