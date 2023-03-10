const BASE_URL = "http://nextpress.local/wp-json/wp/v2";

export async function getPosts() {
  const postsRes = await fetch(BASE_URL + "/posts?_embed");
  const posts = await postsRes.json();
  return posts;
}

export async function getPost(slug) {
  const posts = await getPosts();
  const postArray = posts.filter((post) => post.slug == slug);
  const post = postArray.length > 0 ? postArray[0] : null;
  return post;
}

export async function getSlugs(type) {
  let elements = [];
  switch (type) {
    case "posts":
      elements = await getPosts();
      break;
    case "events":
      elements = await getEvents();
      break;
  }
  const elementsIds = elements.map((element) => {
    return {
      params: {
        slug: element.slug,
      },
    };
  });
  return elementsIds;
}

export function getDate(date) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
