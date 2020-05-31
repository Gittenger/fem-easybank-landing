import React from "react";

import Container from "../container/container.component";
import ArticleBox from "../article-box/article-box.component";

import { ArticlesContainer, ArticleBoxesContainer } from "./articles.styles";

const iter = [
  {
    id: 1,
    img: "currency",
    author: "John Doe",
    properties: {
      heading: "Currency article",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus reiciendis ut ducimus fugit impedit!",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 2,
    img: "restaurant",
    author: "John Doe",
    properties: {
      heading: "Restaurant article",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus reiciendis ut ducimus fugit impedit!",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 3,
    img: "plane",
    author: "John Doe",
    properties: {
      heading: "Plane article",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus reiciendis ut ducimus fugit impedit!",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 4,
    img: "confetti",
    author: "John Doe",
    properties: {
      heading: "Confetti article",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus reiciendis ut ducimus fugit impedit!",
      priority: "h3",
      alignment: "left",
    },
  },
];

const Articles = () => (
  <ArticlesContainer>
    <Container class="content-container">
      <h2>Latest Articles</h2>
      <ArticleBoxesContainer>
        {iter.map(({ id, ...rest }) => (
          <ArticleBox key={id} {...rest}>
            Article {id}
          </ArticleBox>
        ))}
      </ArticleBoxesContainer>
    </Container>
  </ArticlesContainer>
);

export default Articles;
