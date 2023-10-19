import { useState, useEffect } from "react";
import ArticleCard from "./components/cards/ArticleCard";
import Skeleton from "./components/shared/Skeleton";
import Pagination from "./components/shared/Pagination";
import LocalSearch from "./components/shared/search/LocalSearch";
import {
  refetchArticle,
  searchArticle,
} from "./lib/action/articleSearch.action";
import { useQueryClient } from "react-query";
import Filter from "./components/shared/Filter";

function App() {
  const queryClient = useQueryClient();
  const [querySearch, setQuerySearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("newest");
  const [page, setPage] = useState<number>(0);
  const dataDummy = new Array(10).fill(undefined);

  useEffect(() => {
    refetchArticle({
      queryClient,
      path: "articlesearch.json",
      queryParams: querySearch,
      page,
      sort: filter,
    });
    window.scroll({ top: 0, behavior: "smooth" });
  }, [querySearch, page, filter]);

  useEffect(() => {
    setPage(0);
  }, [querySearch, filter]);

  const { data, isLoading, isError } = searchArticle({
    path: "articlesearch.json",
    queryParams: querySearch,
    page,
    sort: filter,
  });

  const resetState = () => {
    if (page > 0) {
      setPage(0);
    } else {
      window.location.reload();
    }
  };

  if (isError)
    return (
      <>
        <div className="w-full h-screen py-4">
          <img
            src="../public/404_error.png"
            alt="error image"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        <button
          className="flex min-w-[200px] justify-center text-center px-4 py-3 border border-gray-800 text-gray-800 rounded-xl mx-auto mb-6 hover:bg-gray-800 hover:text-gray-200"
          type="button"
          onClick={() => resetState()}
        >
          Go Back
        </button>
      </>
    );

  return (
    <main className="p-5">
      <h1 className="font-bold text-gray-800 text-2xl px-0 text-center sm:text-left sm:px-20">
        Article NYT
      </h1>
      <div className="flex flex-wrap relative justify-between gap-2 w-[85%] items-center mx-auto mt-4">
        <LocalSearch value={querySearch} setValue={setQuerySearch} />
        <Filter value={filter} setFilter={setFilter} />
      </div>
      {isLoading ? (
        <>
          <div className="mt-6 flex flex-wrap w-full gap-6 justify-center items-center">
            {dataDummy.map((_, idx) => (
              <Skeleton key={idx} />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-6 flex flex-wrap w-full gap-6 justify-center items-center">
          {data?.response.docs.map((each: any) => (
            <>
              <ArticleCard article={each} key={each._id} />
            </>
          ))}
        </div>
      )}

      <Pagination
        initialPage={page}
        hasNextPage={Math.ceil(data?.response.meta.hits / 10) > page}
        setPage={setPage}
      />
    </main>
  );
}
export default App;
