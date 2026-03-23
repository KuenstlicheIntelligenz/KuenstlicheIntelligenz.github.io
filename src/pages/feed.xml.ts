import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');
  const sorted = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  return rss({
    title: 'aibab',
    description: 'AI Engineer & Machine Learning Specialist. Building intelligent systems and exploring the frontiers of artificial intelligence.',
    site: context.site!,
    items: sorted.slice(0, 20).map(post => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary || '',
      link: `/posts/${post.id}/`,
    })),
  });
}
