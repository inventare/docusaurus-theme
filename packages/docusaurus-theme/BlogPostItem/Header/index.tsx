import React from 'react';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@theme/BlogPostItem/Header/Authors';
import Tags from './Tags';

export default function BlogPostItemHeader(): JSX.Element {
  return (
    <header>
      <div className="top-line">
        <Tags />
        <BlogPostItemHeaderInfo />
      </div>

      <BlogPostItemHeaderTitle />
      <BlogPostItemHeaderAuthors />
    </header>
  );
}
