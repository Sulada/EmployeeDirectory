import React, { useContext } from "react";
import DataBody from "../InfoBody/InfoBody";
import "../InfoTable/InfoTable.css";
import DataAreaContext from "../Context/InfoContainContext";

const InfoTable = () => {
  const context = useContext(DataAreaContext);

  return (

    <div className="datatable mt-5">
      <table
        id="table"
        className="table table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            {context.developerState.headings.map(({ name, width }) => {
              return (
                <th
                  className="col"
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    // name.toLowerCase
                    context.handleSort(name);
                  }}
                >
                  {name}
                  <span className="pointer"></span>
                </th>
              );
            })}
          </tr>
        </thead>

        <DataBody />
      </table>
    </div>
  );
}

export default InfoTable;