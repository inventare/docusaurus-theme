import {useContext} from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@docusaurus/theme-classic/lib/theme/BlogLayout';
import BlogListPaginator from '@docusaurus/theme-classic/lib/theme/BlogListPaginator';
import SearchMetadata from '@docusaurus/theme-classic/lib/theme/SearchMetadata';
import type {
  BlogPaginatedMetadata,
  BlogSidebar,
  PropBlogPostContent,
} from '@docusaurus/plugin-content-blog';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import BlogPostItems from '../BlogPostItems';

interface Props {
  readonly sidebar: BlogSidebar;
  readonly metadata: BlogPaginatedMetadata;
  readonly items: readonly {readonly content: PropBlogPostContent}[];
}

function BlogListPageMetadata(props: Props): JSX.Element {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const {metadata, items, sidebar} = props;
  return (
    <BlogLayout sidebar={sidebar}>
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

