export const RECOMMENDATION_METHODS = [
  {
    type: "title",
    title: "🎬 Title-Based Recommendations",
    summary: "Find similar movies based on what users liked after watching the same title.",
    description: `We identify users who rated the given movie highly and then recommend other movies they also liked.

Steps:
1. Match the movie title.
2. Find users who rated it.
3. Collect other highly rated movies by those users.
4. Return top results.`,
  },
  {
    type: "genre",
    title: "🎭 Genre-Based Recommendations",
    summary: "Explore movies that match a selected pair of genres.",
    description: `This method filters all movies having both selected genres (e.g., Action + Comedy).

Steps:
1. Parse genres.
2. Match movies with both genres.
3. Sort by weighted rating.
4. Return top matches.`,
  },
  {
    type: "cluster",
    title: "📊 Clustering-Based Recommendations",
    summary: "Discover movies grouped by genre patterns using KMeans clustering.",
    description: `This method creates clusters based on genre combinations using KMeans.

Steps:
1. One-hot encode genre list.
2. Apply KMeans clustering.
3. Find cluster of selected movie.
4. Recommend other movies from same cluster.`,
  }
];
