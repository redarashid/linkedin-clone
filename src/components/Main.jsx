import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Main = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <Container>
        <ShareBox>
          <div>
            {props.user && props.user.photoURL ? (
              <img src={props.user.photoURL} alt="" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <button
              onClick={handleClick}
              disabled={props.loading ? true : false}>
              Start a post
            </button>
          </div>
        </ShareBox>
      </Container>
    </div>
  );
};

const Container = styled.div``;
const ShareBox = styled(CommonCard)``;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getArticles: () => dispatch(getArticlesAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
