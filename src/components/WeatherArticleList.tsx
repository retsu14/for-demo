import React from "react";
import { WeatherArticle } from "./WeatherArticle";
import { articlesData, type Article } from "../data/articlesData.ts";
export function WeatherArticleList() {
  return (
    <div>
      {articlesData.map((article: Article) => (
        <WeatherArticle key={article.id} {...article} />
      ))}
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition-colors">
          Load more articles
        </button>
      </div>
    </div>
  );
}
