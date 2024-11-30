import styled from "styled-components";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
import Main from "./Main";

const Home = () => {
  return (
    <div>
      <Container>
        <Section>
          <h5>
            <a href="#">Hiring in a hurry? - </a>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business
            moving.
          </p>
        </Section>
        <Layout>
          <Leftside />
          <Main />
          <Rightside />
        </Layout>
      </Container>
    </div>
  );
};

const Container = styled.div``;
const Section = styled.section``;
const Layout = styled.div``;

export default Home;
