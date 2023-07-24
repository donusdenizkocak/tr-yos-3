const CompareDeprtCard = ({
  university,
  faculty,
  department,
  language,
  id,
}) => {
  return (
    <div
      className="max-w-sm flex flex-col justify-between bg-white border border-gray-400 rounded-lg p-4 shadow m-5"
      key={id}
    >
      <img
        className="rounded-t-lg"
        src="https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg"
        alt=""
      />

      <div className="p-5 h-full flex flex-col justify-between">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 border-b-2 p-4 text-center">
            {department?.tr}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
          {faculty?.tr}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
          {university?.tr}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
          $15000 / year
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 border-b-2 p-4 text-center">
          {language || "Turkish"}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 p-4 text-center">
          4 Years
        </p>
      </div>
    </div>
  );
};
export default CompareDeprtCard;
