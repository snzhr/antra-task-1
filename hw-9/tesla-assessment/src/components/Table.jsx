import React, { useEffect, useState } from "react";
import { data } from "../data";

export default function Table() {
  const [info, setInfo] = useState([]);

    useEffect(() => {
        const reduced = data.reduce((acc, item) => {
            if (!acc[item.region]) {
                const tempObj = {
                    region: item.region,
                    model: "sum",
                    sales: item.sales
                }
                acc[item.region] = [tempObj]
            }else{
                acc[item.region][0].sales += item.sales 
            }
            acc[item.region].push(item);
            return acc;
        }, {});

        const newData = [];

        for (const key in reduced) {
            newData.push(...reduced[key])
        }

        setInfo(newData);
 
    },[]);

  return (
    <table>
      <thead>
        <tr>
          <th>region</th>
          <th>model</th>
          <th>sales</th>
        </tr>
      </thead>
      <tbody>
        {
            info.map((item, i) => {
                return (
                    <tr key={i}>
                        <td>{item.region}</td>
                        <td>{item.model}</td>
                        <td>{item.sales}</td>
                    </tr>
                )
            })
        }
      </tbody>
    </table>
  );
}
