import React, { useContext, useEffect } from "react";

import OrbsContext from "../../../contex/orbsData/orbsContext";
import { tableHeader } from "../../../constants";
import { TableRow } from "./TableRow";

import classes from "./TablePrice.module.scss";

const TablePrice = () => {
  const orbsContext = useContext(OrbsContext);
  const {
    exchangeData,
    priceData,
    poolData,
    linkId,
    balancerPrice,
    uniswapPrice,
    setExchangeData,
  } = orbsContext;

  useEffect(() => {
    if (
      exchangeData.length !== 9 &&
      balancerPrice !== null &&
      uniswapPrice !== null
    ) {
      setExchangeData(priceData, balancerPrice, uniswapPrice, exchangeData);
    }
  }, [balancerPrice, uniswapPrice, linkId]);

  const tableTitle = tableHeader.map(({ trading, exchange, type, price }) => (
    <TableRow
      key={`${price}_${trading}`}
      trading={trading}
      exchange={exchange}
      type={type}
      price={price}
      className={classes.table_header}
    />
  ));

  const tableContant = exchangeData.map(({ pair, exchange, type, price }) => {
    let rand = Math.floor(Math.random() * 1000) + 1;
    return (
      <TableRow
        key={`${exchange}_${pair}_${rand}`}
        trading={pair}
        exchange={exchange}
        type={type}
        price={price}
      />
    );
  });

  return (
    <div className={classes.table_wrapper}>
      <span className={classes.table_title}>Cross-exchange comparison</span>
      {tableTitle}
      {tableContant}
    </div>
  );
};

export default TablePrice;
