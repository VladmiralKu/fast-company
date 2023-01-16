const SearchStatus = (users) => {
  const renderPhrace = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "человек";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека";
    if (lastOne === 1) return "человек";
  };
  return (
    <div>
      <h2>
        <span
          className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}
        >
          {users.length > 0
            ? `${users.length} ${renderPhrace(
                users.length
              )} готовы с тобой тусануть`
            : "никто с тобой не пойдет"}
        </span>
      </h2>
    </div>
  );
};
export default SearchStatus;
