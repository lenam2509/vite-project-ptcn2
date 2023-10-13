import React from "react";

export default function Bills() {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-slate-200 rounded">
          {/* head */}
          <thead className="bg-slate-200 text-base text-center">
            <tr>
              <th></th>
              <th>Mã hóa đơn</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Bill Gates</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
