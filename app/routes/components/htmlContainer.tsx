import React from "react";

export default function HTMLContainer({ content }: { content: string }) {
  return (
    <div>
      <style>
        {`
          .wikimedia-content {
            font-size: 2vh;
            line-height: 2.8vh;
            color: #333;
          }

          .wikimedia-content a {
            color: #1a73e8;
            text-decoration: none;
          }

          .wikimedia-content a:hover {
            text-decoration: underline;
          }

          .wikimedia-content em {
            font-style: italic;
          }

          .wikimedia-content p {
            margin: 0.5rem 0;
          }

          .wikimedia-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0.5rem 0;
          }
        `}
      </style>
      <div
        className="wikimedia-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
