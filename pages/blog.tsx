import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';

import axios from 'axios';
const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  div {
    max-width: 450px;
  }

  img {
    padding: 0 5px;
    height: 150px;
  }
`;
var iStyle = {
    "list-style": 'none',
    "border": '1px solid rgba(0,0,0,0.2)',
    "border-width": "0 0 1px  0",
    padding: "10px"
};
var timeStyle = {
    fontSize: "12px",
    "fontWeight": 500,
    opacity: 0.5
}
const search = event => {
    //...
}
const Blog = props => (
    <Layout>
        <input onKeyUp={e => search(e)} />
        <h1>List</h1>
        {props.data.map((item, key) => {
            return (
                <li key={key} style={iStyle}>
                    {item.src ?
                        <ImageWrapper>
                            <img
                                data-testid="img"
                                title={item.title}
                                src={"https://upply-interview.herokuapp.com/images/" + item.src} alt={item.title} />
                        </ImageWrapper>
                        : ""}
                    <h2>
                        {item.title}
                        <br />
                        {item.date ?
                            <time style={timeStyle}>
                                {item.date}
                            </time>
                            : ""}
                    </h2>

                    <p>
                        {item.text}
                    </p>
                </li>
            )
        }
        )}
    </Layout>
);

Blog.getInitialProps = async function () {
    const res = await axios.get('http://upply-interview.herokuapp.com/');
    return {
        data: res.data
    };
};

export default Blog;
