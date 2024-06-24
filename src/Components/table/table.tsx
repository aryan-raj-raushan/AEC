export default function Table({
  table=[],
  title = "",
  showHeader = true,
}: {
  table?: Array<any>;
  title?: string;
  showHeader?: boolean;
}) {
  let heads = Object?.keys(table[0] || []);
  const columnWidth = `w-[${Math.floor(100 / heads.length)}%]`;

  return (
    <>
      <div>
        {title ? (
          <div className="text-center text-xl text-primary bg-primary-light font-semibold border-l border-r border-t border-primary-text-light p-[10px]">
            {title}
          </div>
        ) : (
          <></>
        )}

        <table className="min-w-full border-collapse table-fixed rounded-md">
          {showHeader ? (
            <>
              <thead className="bg-primary-light">
                <tr>
                  {heads && heads?.map((head) => {
                    return (
                      <td
                        key={head}
                        className={`border border-primary-text-light font-semibold px-4 py-3 ${columnWidth}`}
                      >
                        {head}
                      </td>
                    );
                  })}
                </tr>
              </thead>
            </>
          ) : (
            <></>
          )}

          <tbody>
            {table && table?.map((row, index) => {
              return (
                <tr key={index}>
                  {Object.entries(row).map(([key, value], i) => (
                    <td
                      key={i}
                      className={`border border-primary-text-light px-4 py-3 ${columnWidth} `}
                    >
                      {row[key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
