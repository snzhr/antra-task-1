import React, { useEffect, useState } from "react";
import { data, regionOptions, modelOptions } from "../data";

export default function TableTwo() {
  const regions = ["all", ...Object.keys(regionOptions)];
  const models = ["all", ...Object.keys(modelOptions)];

  const [info, setInfo] = useState([]);
  const [regionFilter, setRegionFilter] = useState("all");
  const [modelFilter, setModelFilter] = useState("all");

  useEffect(() => {
    setInfo(data);
  }, []);

  useEffect(() => {
    filterData();
  }, [regionFilter, modelFilter]);

  function filterData() {
    if (regionFilter !== "all" && modelFilter !== "all") {
      setInfo(
        data.filter(
          (item) => item.region === regionFilter && item.model === modelFilter
        )
      );
    } else if (regionFilter === "all" && modelFilter !== "all") {
      setInfo(data.filter((item) => item.model === modelFilter));
    } else if (regionFilter !== "all" && modelFilter === "all") {
      setInfo(data.filter((item) => item.region === regionFilter));
    } else {
      setInfo(data);
    }
  }

  function handleRegionFilter(e) {
    setRegionFilter(e.target.value);
  }

  function handleModelFilter(e) {
    setModelFilter(e.target.value);
  }

  return (
    <div>
      <div className="filters">
        <span>Region Filter</span>
        <select onChange={handleRegionFilter}>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

        <span>Model Filter</span>
        <select onChange={handleModelFilter}>
          {models.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>region</th>
            <th>model</th>
            <th>sales</th>
          </tr>
        </thead>
        <tbody>
          {info.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.region}</td>
                <td>{item.model}</td>
                <td>{item.sales}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
