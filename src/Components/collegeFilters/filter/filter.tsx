import { useEffect, useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa";

type filter = {
  name: string;
  count: number;
};

export default function Filter({
  name,
  filters,
  handleSelectFilter,
  multiSelect = false,
}: {
  name?: string;
  filters?: [];
  handleSelectFilter?: Function;
  multiSelect?: boolean;
}) {
  const [open, setOpen] = useState(true);
  const [Search, setSearch] = useState("");
  const [MatchingFilter, setMatchingFilter] = useState([]);
  const handleOpen = () => setOpen(open ? false : true);

 
  const handleFilter = (event: any) => {
    if (filters) {
      setMatchingFilter(
        filters.filter((filter: any) => filter.name.includes(event.target.value))
      );
    }
  };
  

  const handleSearch = (event: any) => {};

  useEffect(() => {}, [MatchingFilter]);

  return (
    <>
      <div className="shadow-lg p-4 my-4 rounded-lg border">
        <div
          className="px-2 py-2 mb-4 h-10 flex items-center justify-between border rounded-md"
          onClick={handleOpen}
        >
          <span>{name}</span>
          {/* <span>{open ? <FaAngleDown /> : <FaAngleUp />}</span> */}
        </div>
        {open ? (
          <>
            <div className="py-1">
              <div className="mb-4 h-10">
                <input
                  className="w-full border-2 border-[#898C8C] rounded-md px-2 py-2"
                  placeholder={`search ${name}`}
                  onChange={handleFilter}
                />
              </div>
              <div className="h-full flex flex-col gap-4">
                {Search.trim.length === 0 &&
                  filters?.map((filter: any) => {
                    return (
                      <div
                        key={filter.name}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        {multiSelect ? (
                          <input
                            type="checkbox"
                            name={name}
                            id=""
                            className="h-5 w-5 rounded-md"
                            onClick={() => handleSelectFilter && handleSelectFilter(filter.name)}
                          />
                        ) : (
                          <input
                            type="radio"
                            name={name}
                            id=""
                            value={filter.name}
                            className="h-5 w-5 rounded-md"
                            onClick={() => handleSelectFilter && handleSelectFilter(filter.name)}
                          />
                        )}

                        <span className="flex-1 text-sm text-secondary-text hover:text-primary">
                          {filter.name}
                        </span>
                        <span className="text-sm text-secondary-text hover:text-primary">
                          ({filter.count})
                        </span>
                      </div>
                    );
                  })}
                {/* {Search.length>0 && MatchingFilter.map((filter:any)=>{
                        <div className="flex gap-1" key={filter.name}>
                            <input type="checkbox" name="" id="" className="" onClick={()=>props.handleSelectFilter(filter.name)} />
                            <span className="text-xs">{filter.name}-[{filter.count}]</span>
                        </div>
                    })} */}
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
