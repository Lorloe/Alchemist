import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Element from "../Element";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Annotation from "../Annotation";
import { ElementContext } from "../../../storage/elements-context";
let cx = classNames.bind(styles);

const Table = ({ elements }) => {
  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };
  const {ChangeCategory,Category} = useContext(ElementContext);
  return (
    <div className={cx("container")}>
      <div className={cx("grid-table")}>
        <div className={cx("display")}>
          <label>Change Display Style</label>
          <Select
            value={Category}
            onChange={ChangeCategory}
            displayEmpty
            className={cx("selector")}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Nonmetal"}>Nonmetal</MenuItem>
            <MenuItem value={"Noble gas"}>Noble Gas</MenuItem>
            <MenuItem value={"Alkali metal"}>Alkali Metals</MenuItem>
            <MenuItem value={"Post-transition metal"}>Post-Transition Metals</MenuItem>
            <MenuItem value={"Transition metal"}>Transition Metals</MenuItem>
            <MenuItem value={"Alkaline earth metal"}>Alkaline Earth Metals</MenuItem>
            <MenuItem value={"Metalloid"}>Metalloid</MenuItem>
            <MenuItem value={"Halogen"}>Halogen</MenuItem>
            <MenuItem value={"Lanthanide"}>Lanthanide</MenuItem>
            <MenuItem value={"Actinide"}>Actinide</MenuItem>
          </Select>
        </div>
        <Annotation />
        {elements &&
          elements.map((item) => {
            return (
              <Element data={item} key={item.symbol} />
            );
          })}
      </div>
    </div>
  );
};

export default Table;
