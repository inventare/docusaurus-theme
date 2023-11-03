import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import EditThisPage from '@docusaurus/theme-classic/lib/theme/EditThisPage';
import ReadMoreLink from '@docusaurus/theme-classic/lib/theme/BlogPostItem/Footer/ReadMoreLink';

export default function BlogPostItemFooter(): JSX.Element | null {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {tags, title, editUrl, hasTruncateMarker} = metadata;

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;

  const tagsExists = tags.length > 0;

  const renderFooter = tagsExists || truncatedPost || editUrl;

  if (!renderFooter) {
    return null;
  }

  return (
    <footer
      className={clsx(
        'docusaurus-mt-lg',
        isBlogPostPage && 'blog-posts-footer-details-full',
      )}>

      {isBlogPostPage && editUrl && (
        <div className="col margin-top--sm">
          <EditThisPage editUrl={editUrl} />
        </div>
      )}

      {truncatedPost && (
        <div>
          <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
        </div>
      )}
    </footer>
  );
}
