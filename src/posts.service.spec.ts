import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;
  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(async () => {
    postsService = new PostsService();

    postsService.create({ text: 'Some pre-existing post' });
  });

  it('should add a new post', () => {
    const result = postsService.create(post);

    expect(result).toEqual({
      id: expect.any(String),
      text: expect.any(String),
      date: expect.any(String),
    });

    expect(result).toHaveProperty('text', result.text);
    expect(result).toHaveProperty('text', expect.any(String));

    expect(result).toMatchObject({
      id: expect.any(String),
      text: expect.any(String),
      date: expect.any(String),
    });
    expect(result).not.toEqual(post);
  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);
    const result = postsService.find(createdPost.id);

    expect(result).toEqual({
      id: expect.any(String),
      text: expect.any(String),
      date: expect.any(String),
    });

    expect(result).toHaveProperty('id', createdPost.id);
    expect(result).toMatchObject(createdPost);

    expect(result).not.toEqual(-1);
    expect(result).not.toEqual(undefined);
  });
});