import { useParams, Link } from "react-router-dom";
import { articlesData, type Article } from "../data/articlesData.ts";
import { ArrowLeftIcon, CalendarIcon, UserIcon, TagIcon } from "lucide-react";
export function ArticlePage() {
  const { articleId } = useParams();
  const article: Article | undefined = articlesData.find(
    (a: Article) => a.id === articleId
  );
  if (!article) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Article not found
        </h2>
        <p className="text-gray-600 mb-6">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <Link
          to="/"
          className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Return to homepage
        </Link>
      </div>
    );
  }

  const plainTextContent = article.content
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const previewText = plainTextContent.substring(0, 450);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-sky-600 hover:text-sky-800 font-medium mb-6"
      >
        <ArrowLeftIcon className="h-4 w-4 mr-2" />
        Back to all articles
      </Link>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex items-center p-8">
          <h1 className=" text-3xl font-bold">{article.title}</h1>
        </div>
        <div className="px-8">
          {/* Block 1: Description */}
          <div className="mb-6">
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          {/* Block 2: Image with adjacent text */}
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <img
                src={article.image[1] ?? article.image[0]}
                alt={article.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Overview
                </h3>
                <p className="text-gray-700 mb-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>

          {/* Block 3: Highlights */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="bg-sky-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-5 w-5 text-sky-500 mr-2" />
                <h4 className="font-medium text-gray-800">Published</h4>
              </div>
              <p className="text-2xl font-bold text-sky-700">{article.date}</p>
              <p className="text-xs text-sky-600 mt-1">Latest update time</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <UserIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="font-medium text-gray-800">Author</h4>
              </div>
              <p className="text-2xl font-bold text-blue-700">
                {article.author}
              </p>
              <p className="text-xs text-blue-600 mt-1">
                Verified meteorologist
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <TagIcon className="h-5 w-5 text-amber-500 mr-2" />
                <h4 className="font-medium text-gray-800">Category</h4>
              </div>
              <p className="text-2xl font-bold text-amber-700">
                {article.category}
              </p>
              <p className="text-xs text-amber-600 mt-1">Article type</p>
            </div>
          </div> */}

          {/* Long Description */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Long Description
            </h3>
            {/* <div
              className="prose prose-sky max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            /> */}
            <p className="text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articlesData
                .filter(
                  (a: Article) =>
                    a.id !== article.id && a.category === article.category
                )
                .slice(0, 2)
                .map((relatedArticle: Article, index: number) => (
                  <Link
                    key={index}
                    to={`/article/${relatedArticle.id}`}
                    className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg transition-colors"
                  >
                    <h4 className="font-medium text-gray-800 mb-2">
                      {relatedArticle.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {relatedArticle.excerpt.substring(0, 100)}...
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
