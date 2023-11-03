import { ReactNode } from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Container';
import BlogPostItemContent from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Content';
import BlogPostItemHeader from './Header';
import BlogPostItemFooter from './Footer';
import BlogPostItemPreview from './Preview';

interface Props {
  children: ReactNode;
  className?: string;
}

// apply a bottom margin in list view
function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--lg' : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const containerClassName = useContainerClassName();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <div className="left">
        <BlogPostItemHeader />
        <BlogPostItemContent>{children}</BlogPostItemContent>
        <BlogPostItemFooter />
      </div>
      <div className="preview">
        <BlogPostItemPreview />
      </div>
    </BlogPostItemContainer>
  );
}
