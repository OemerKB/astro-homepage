import { describe, expect, it } from 'vitest';
import { getPermalink, getHomePermalink, getBlogPermalink } from './utils/permalinks';
import { getAsset } from './utils/permalinks';

describe('Navigation Permalinks', () => {
  it('should generate correct home permalink', () => {
    expect(getHomePermalink()).toBe('/');
  });

  it('should generate correct blog permalink', () => {
    expect(getBlogPermalink()).toBe('/blog');
  });

  it('should generate correct custom permalink', () => {
    expect(getPermalink('test')).toBe('/test');
    expect(getPermalink('test', 'page')).toBe('/page/test');
  });

  it('should generate correct asset path', () => {
    expect(getAsset('/image.jpg')).toBe('/image.jpg');
  });
});
