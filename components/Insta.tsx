import cameraWithFlash from '../emojis/camera-with-flash.png';
import Emoji from './Emoji';
import styles from './Insta.module.css';
import Masonry from './Masonry';

enum MediaType {
  VIDEO = 'VIDEO',
  CAROUSEL = 'CAROUSEL',
  REELS = 'REELS',
}

interface InstaPost {
  id: string;
  permalink: string;
  caption: string;
  media_type: MediaType;
  media_url: string;
  thumbnail_url: string;
}

const instaEndpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url&access_token=${process.env.REACT_APP_INSTAGRAM_TOKEN}`;
async function fetchPosts() {
  const response = await fetch(instaEndpoint, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch instagram posts');
  }
  const json = await response.json();
  return json.data as InstaPost[];
}

export default async function Insta() {
  const posts = await fetchPosts();

  const getImageUrl = (post: InstaPost) =>
    post.media_type === MediaType.VIDEO ? post.thumbnail_url : post.media_url;

  return (
    <>
      <div className="container">
        <h2>
          <a href="https://www.instagram.com/syson.se/">@syson.se</a> på
          Instagram <Emoji image={cameraWithFlash} />
        </h2>
      </div>
      {posts && (
        <div className={styles.wrapper}>
          <Masonry
            breakpointCols={{ default: 3, 720: 4, 1024: 6 }}
            className={styles.masonry}
            columnClassName={styles.masonryColumn}
          >
            {posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.image}
                  src={getImageUrl(post)}
                  alt={post.caption}
                />
              </a>
            ))}
          </Masonry>
        </div>
      )}
    </>
  );
}
