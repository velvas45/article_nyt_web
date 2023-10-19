import { ResponseArticle } from "../../types";
import { getHumanDate } from "../../utils";

const ArticleCard = ({ article }: ResponseArticle) => {
  return (
    <div className="flex flex-col gap-2">
      <a href={article.web_url} target="_blank">
        <article className="w-[300px] cursor-pointer group relative z-10">
          {article.multimedia.length > 0 ? (
            <div className="w-[300px] h-[300px]">
              <img
                src={`http://static01.nyt.com/${article.multimedia[0].url}`}
                alt="Image Article"
                className="object-cover w-full h-full group-hover:scale-110 group-hover:transition-all group-hover:ease-[cubic-bezier(0.25, 0.45, 0.45, 0.95)] group-hover:duration-[4000ms] group-hover:rounded-xl"
              />
            </div>
          ) : (
            <div className="w-[300px] h-[300px]">
              <img
                src="https://placehold.co/200x200/gray/white@2x.png?text=No+Image+For+this+Article&font=roboto"
                alt="no image"
                className="object-cover w-full h-full"
              />
            </div>
          )}
          <div className="block w-full min-h-[190px] mt-6 flex flex-col gap-4 text-gray-800">
            <h3 className="line-clamp-2 font-bold text-lg sm:text-xl">
              {article.headline.main}
            </h3>
            <p className="line-clamp-5 text-justify font-light text-sm sm:text">
              {article.abstract}
            </p>
          </div>
          <div className="flex justify-between items-start w-full text-sm text-gray-800">
            <p>{article.type_of_material}</p>
            <p>{getHumanDate(article.pub_date).date}</p>
          </div>
        </article>
      </a>
    </div>
  );
};

export default ArticleCard;
