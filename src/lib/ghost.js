import GhostContentAPI from '@tryghost/content-api';

// Initialize Ghost Content API
export const ghostAPI = new GhostContentAPI({
  url: 'https://serpapinto.marketingcarcontent.com',
  key: '69442838bbfdab724b782f26:8904896677f0e3496049bd6a1bc47e4778054ad9001c9f8efd5fbab54703eeca',
  version: 'v5.0'
});

// Fetch all pages from Ghost
export const getPages = async () => {
  try {
    const pages = await ghostAPI.pages.browse({
      limit: 'all',
      include: 'tags,authors'
    });
    return pages;
  } catch (error) {
    console.error('Error fetching Ghost pages:', error);
    return [];
  }
};

// Fetch a single page by slug
export const getPageBySlug = async (slug) => {
  try {
    const page = await ghostAPI.pages.read({
      slug: slug
    }, {
      include: 'tags,authors'
    });
    return page;
  } catch (error) {
    console.error(`Error fetching page with slug ${slug}:`, error);
    return null;
  }
};

// Fetch all blog posts from Ghost
export const getPosts = async () => {
  try {
    const posts = await ghostAPI.posts.browse({
      limit: 'all',
      include: 'tags,authors'
    });
    return posts;
  } catch (error) {
    console.error('Error fetching Ghost posts:', error);
    return [];
  }
};

// Fetch a single post by slug
export const getPostBySlug = async (slug) => {
  try {
    const post = await ghostAPI.posts.read({
      slug: slug
    }, {
      include: 'tags,authors'
    });
    return post;
  } catch (error) {
    console.error(`Error fetching post with slug ${slug}:`, error);
    return null;
  }
};

// Get site settings
export const getSiteSettings = async () => {
  try {
    const settings = await ghostAPI.settings.browse();
    return settings;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return null;
  }
};
