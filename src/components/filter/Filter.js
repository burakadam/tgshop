import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getFilters } from "../../helpers/FilterHelper";
import { changeFilter } from "../../features/productSlice";

import Button from "../button";
import Text from "../text";
import Icons from "../icons";

import { S } from "./Filter.styles";

export default function Filter() {
  const productFilterState = useSelector((state) => state.product.filter);
  const dispatch = useDispatch();

  const [filters, setFilters] = useState([]);
  const [isFilterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setFilters(getFilters());
  }, []);

  function _handleFilterItem(name) {
    setFilterOpen(false);
    dispatch(changeFilter({ filter: name }));
  }

  function _hanleFilterButton() {
    setFilterOpen(!isFilterOpen);
  }

  return (
    <S.Aside className={isFilterOpen ? "filter-open" : ""}>
      <Button onClick={() => _hanleFilterButton()}>
        <Text size="md" font="helvaticaBold">
          Filters
        </Text>
        <Icons icon="arrowdown" />
      </Button>
      <S.Filters>
        {filters.map((item, idx) => {
          return (
            <Button
              key={idx}
              className={item === productFilterState ? "active" : ""}
              onClick={() => _handleFilterItem(item)}
            >
              <Text size="md" font="helvaticaBold" color="white">
                {item}
              </Text>
            </Button>
          );
        })}
      </S.Filters>
    </S.Aside>
  );
}
