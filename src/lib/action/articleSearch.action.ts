import { QueryClient, useQuery } from "react-query";

interface Params {
  queryClient?: QueryClient;
  path: string;
  queryParams: string;
  page: number;
  sort: string;
}

// Define a function to fetch data
const fetchData = async ({ path, queryParams, page, sort }: Params) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_APP_API_BASE_URL
    }${path}?q=${queryParams}&page=${page}&sort=${sort}&api-key=${
      import.meta.env.VITE_APP_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Function Fetch Article
export const searchArticle = ({ path, queryParams, page, sort }: Params) => {
  const { isLoading, isError, data, error } = useQuery(
    ["searchArticle", { path, queryParams, page, sort }],
    () => fetchData({ path, queryParams, page, sort }),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  return {
    isLoading,
    isError,
    data,
    error,
  };
};

// Revalidate Article
export const refetchArticle = async ({
  queryClient,
  path,
  queryParams,
  page,
  sort,
}: Params) => {
  await queryClient.prefetchQuery({
    queryKey: ["searchArticle", { path, queryParams, page, sort }],
    queryFn: () => fetchData({ path, queryParams, page, sort }),
  });
};
