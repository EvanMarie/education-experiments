import React from "react";

export default function HTMLContainer({ content }: { content: string }) {
  return (
    <div>
      <style>
        {`
          .html-content {
            font-size: 2vh;
            line-height: 2.8vh;
            color: #333;
          }

          .html-content a {
            color: purple;
            text-decoration: none;
          }

          .html-content a:hover {
            text-decoration: underline;
          }

          .html-content em {
            font-style: italic;
          }

          .html-content p {
            margin: 1.5vh 0;
          }

          .html-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0.5rem 0;
          }
        `}
      </style>
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
