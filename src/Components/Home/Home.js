import { Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import classes from "./Home.module.css";
import { HomeStyle } from "./HomeStyle";

function Home() {
  const screens = useBreakpoint();
  console.log("xs", screens.xs);
  console.log("sm", screens.sm);
  console.log("md", screens.md);
  console.log("lg", screens.lg);
  console.log("xl", screens.xl);
  return (
    <div>
      <HomeStyle screens={screens}>
        <Row className={classes.row} gutter={[16, 24]} justify="space-around">
          <Col
            className="col"
            //   xs={{ span: 24, offset: 0 }}
            //   lg={{ span: 6, offset: 2 }}
            //   md={{ span: 6}}
            //   span={8}
            //   offset={1}
          >
            <p>Col</p>
          </Col>
          <Col
            className="col"
            //   xs={{ span: 24, offset: 0 }}
            //   lg={{ span: 6, offset: 2 }}
            //   md={{ span: 6 }}
            // span={8}
            // offset={1}
          >
            <p>Col</p>
          </Col>
          <Col
            className="col"
            //   xs={{ span: 24, offset: 0 }}
            //   lg={{ span: 6, offset: 2 }}
            //   md={{ span: 6 }}
            //   span={8}
            //   offset={1}
          >
            <p>Col</p>
          </Col>
        </Row>
      </HomeStyle>
    </div>
  );
}

export default Home;
