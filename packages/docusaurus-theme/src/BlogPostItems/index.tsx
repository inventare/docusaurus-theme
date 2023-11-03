import { ReactNode, ComponentType } from 'react';
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import { PropBlogPostContent } from '@docusaurus/plugin-content-blog'
import BlogPostItem from '../BlogPostItem';

interface Props {
  items: readonly {content: PropBlogPostContent}[];
  component?: ComponentType<{children: ReactNode}>;
}

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  return (
    <>
      {items.map(({content: BlogPostContent}) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}>
          <BlogPostItemComponent>
            <BlogPostContent />
          </BlogPostItemComponent>
        </BlogPostProvider>
      ))}
    </>
  );
}
