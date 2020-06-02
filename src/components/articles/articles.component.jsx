import React from "react";

import Container from "../container/container.component";
import ArticleBox from "../article-box/article-box.component";

import { ArticlesContainer, ArticleBoxesContainer } from "./articles.styles";

const iter = [
  {
    id: 1,
    img: "currency",
    author: "Claire Robinson",
    properties: {
      heading: "Receive money in any currency with no fees",
      info:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 2,
    img: "restaurant",
    author: "Wilson Hutton",
    properties: {
      heading: "Treat yourself without worrying about money",
      info:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 3,
    img: "plane",
    author: "Wilson Hutton",
    properties: {
      heading: "Take your Easybank card wherever you go",
      info:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
      priority: "h3",
      alignment: "left",
    },
  },
  {
    id: 4,
    img: "confetti",
    author: "Claire Robinson",
    properties: {
      heading: "Our invite-only Beta accounts are now live!",
      info:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
      priority: "h3",
      alignment: "left",
    },
  },
];

const Articles = () => (
  <ArticlesContainer>
    <Container className="content-container">
      <h2>Latest Articles</h2>
      <ArticleBoxesContainer>
        {iter.map(({ id, ...rest }) => (
          <a href="#">
            <ArticleBox key={id} {...rest}>
              Article {id}
            </ArticleBox>
          </a>
        ))}
      </ArticleBoxesContainer>
    </Container>
  </ArticlesContainer>
);

export default Articles;
