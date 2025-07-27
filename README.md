# 🎬 CineBrain - AI-Powered Movie Recommendation System

Welcome to **CineBrain**, your intelligent movie companion that helps you find the perfect movie using advanced recommendation techniques!

🌐 **Live Demo**: [cine-brain.vercel.app](https://cine-brain.vercel.app)

---

## 🚀 Features

- 🔍 **Search by Movie Title** — Get similar movies based on the one you love.
- 🎭 **Genre-Based Recommendations** — Choose two genres and discover matching films.
- 🧠 **Cluster-Based Suggestions** — Explore clusters of movies grouped by similarity.
- 📈 Built with scalable recommendation logic using multiple algorithms.
- 💡 Clean UI built with React + TailwindCSS.

---

## 🧠 How It Works

CineBrain uses 3 recommendation strategies:

1. **Title-Based**  
   Finds similar movies by comparing metadata like genres and keywords.

2. **Genre-Based**  
   Matches movies that share two selected genres using overlapping filters.

3. **Clustering**  
   Uses K-Means clustering to group similar movies and suggest within those clusters.

---

## 🛠️ Tech Stack

| Frontend      | Backend      | ML & Data     |
| ------------- | ------------ | ------------- |
| React + Vite  | FastAPI      | Pandas, Scikit-learn |
| Tailwind CSS  | Hosted on HuggingFace Spaces | KMeans, cosine similarity |
| Axios         | Google Drive CSV Integration | Custom genre parsing |

---
