import React from 'react';
import BlogPostItemHeaderTitle from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Info';
import BlogPostItemHeaderAuthors from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Header/Authors';
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
