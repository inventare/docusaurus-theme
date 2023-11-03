import React from 'react';
import {useBlogPost} from '@docusaurus/theme-common/internal';
import BlogPostItemContent from '@theme/BlogPostItem/Content';

export default function Preview() {
  const {metadata} = useBlogPost();
  const {frontMatter} = metadata;
  
  if (!frontMatter.image_url) {
    return null;
  }

  return (
    <>
      <img src={frontMatter.image_url} loading="lazy" />
    </>
  )
}
