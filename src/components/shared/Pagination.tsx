interface Props {
  initialPage: number;
  hasNextPage: boolean;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ initialPage, hasNextPage, setPage }: Props) => {
  return (
    <div className="w-full mx-auto flex justify-center items-center mt-10 gap-4">
      <button
        onClick={() => setPage((prevPage) => prevPage - 1)}
        disabled={initialPage <= 0}
        className="disabled:cursor-not-allowed px-3 py-1.5 border-none text-white bg-blue-400 rounded-lg disabled:bg-slate-500"
      >
        Prev
      </button>
      <div className="w-10 h-10 text-white flex justify-center items-center rounded-full border-none bg-blue-400">
        <span>{initialPage + 1}</span>
      </div>
      <button
        onClick={() => setPage((prevPage) => prevPage + 1)}
        disabled={!hasNextPage}
        className="disabled:cursor-not-allowed px-3 py-1.5 border-none text-white bg-blue-400 rounded-lg disabled:bg-slate-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
