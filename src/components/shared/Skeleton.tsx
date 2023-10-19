const Skeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <article className="w-[300px] animate-pulse cursor-pointer group">
        <div className="w-[300px] h-[300px] bg-gray-700"></div>
        <div className="block w-full min-h-[50px] mt-6 flex flex-col gap-4">
          <h3 className="w-full bg-gray-700 h-10"></h3>
          <p className="w-full bg-gray-700 h-10"></p>
        </div>
        <div className="w-full bg-gray-700 h-10"></div>
      </article>
    </div>
  );
};

export default Skeleton;
