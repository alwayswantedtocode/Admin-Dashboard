import { GridColDef } from "@mui/x-data-grid";

const AddUsers = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    //add new item
    // mutation.mutate();
    props.setOpen(false);
  };
  return (
    <div className="w-[100%] h-[100%] absolute top-0 bottom-0 z-10 flex items-center justify-center bg-[rgba(0,0,0,0.72)]">
      <div className="rounded-[10px] w-[40%] h-max p-[30px] bg-[#082f49] relative flex flex-col gap-[10px]">
        <span
          className="w-[30px] h-[30px] cursor-pointer absolute top-[10px] right-[20px] bg-white rounded-[50%] p-[5px] text-black font-bold flex items-center justify-center"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="text-2xl font-bold">Add new {props.slug}</h1>
        <form className="flex flex-wrap gap-[20px]" onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="w-max  border-2 border-white rounded-[5px] flex gap-[5px] items-center justify-center">
                <label>{column.headerName}:</label>
                <div className="w-max h-max ">
                  {" "}
                  <input
                    type={column.type}
                    // placeholder={column.field}
                    className="focus fo w-[10rem] h-[2rem] bg-transparent focus:outline-none "
                  />
                </div>
              </div>
            ))}
          <button className="w-max h-[3rem] p-[0.5rem] rounded-[0.5rem] bg-white text-black font-semibold flex items-center justify-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUsers;
