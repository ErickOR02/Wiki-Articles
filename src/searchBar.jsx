/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomSearchBar = ({
  search,
  setSearch,
  placeholder = "Buscar",
}) => {
  console.log(search);
  
  return (
    <div className="flex-1 bg-white border border-zinc-200 px-3 py-1 rounded-md flex flex-row space-x-3 group items-center w-[778px] h-[40px]">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4 text-slate-600"
      >
        <path
          d="M11.271 11.978L15.1427 15.8507C15.2407 15.9478 15.3687 15.9967 15.4967 15.9967C15.6248 15.9967 15.7527 15.9478 15.8507 15.8507C16.0457 15.6547 16.0457 15.3387 15.8507 15.1427L12.2861 11.5791C14.6669 8.8324 14.5527 4.65637 11.9438 2.04675C9.21444 -0.68225 4.77356 -0.68225 2.04624 2.04675C-0.682079 4.77575 -0.682079 9.21775 2.04624 11.9467C3.36891 13.2687 5.12647 13.9967 6.995 13.9967C7.27093 13.9967 7.49487 13.7727 7.49487 13.4967C7.49487 13.2207 7.27093 12.9967 6.995 12.9967C5.3924 12.9967 3.88678 12.3728 2.75306 11.2397C0.414647 8.89975 0.414647 5.09375 2.75306 2.75375C5.09048 0.41375 8.89552 0.41475 11.2369 2.75375C13.5754 5.09375 13.5754 8.89975 11.2369 11.2397C11.042 11.4347 11.042 11.7517 11.2369 11.9467C11.2479 11.9578 11.2593 11.9682 11.271 11.978Z"
          fill="#343741"
        />
      </svg>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent w-full text-black focus:outline-none text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomSearchBar;
