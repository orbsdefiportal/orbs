import React, { useContext, useEffect } from "react";
import { useQuery, useSubscription } from "@apollo/react-hooks";
import { ToastContainer, toast } from "react-toastify";

import { Statistics } from "./Statistics";
import { TablePrice } from "./TablePrice";
import { InfoSection } from "./infoSection";
import OrbsContext from "../../contex/orbsData/orbsContext";
import { traidingPair } from "../../constants";
import { GET_UNISWAP_TOKEN_PRICE } from "../../contex/dataQuery";

import "react-toastify/dist/ReactToastify.css";
import "./MainStyles.css";
import classes from "./Main.module.scss";

const Main = ({ setIsLoading }) => {
  const orbsContext = useContext(OrbsContext);
  const {
    linkId,
    setDataPool,
    dateDiapason,
    setTime,
    getCoingeckoData,
    exchangeData,
    balancerPrice,
    chartData,
    isSuccess,
    skipStatus,
  } = orbsContext;

  const notify = () => {
    toast("🦄 You've been subscribed successfully", {
      autoClose: 5000,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      notify();
      skipStatus();
    }
  }, [isSuccess]);

  let isLoading =
    exchangeData.length === 9 && chartData.length > 0 && balancerPrice !== null;

  useEffect(() => {
    setIsLoading(isLoading);
  }, [isLoading]);

  useEffect(() => {
    setTime();
  }, []);

  const { data = {}, loading, error } = useQuery(traidingPair[linkId].query, {
    variables: {
      id: traidingPair[linkId].id,
      timestamp_gt: dateDiapason.twoWeekAgo,
      timestamp_lt: dateDiapason.tomorrow,
      monthAgo: dateDiapason.twoMonthAgo,
    },
    context: { clientName: traidingPair[linkId].clientName },
  });

  const response = useQuery(GET_UNISWAP_TOKEN_PRICE, {
    context: { clientName: traidingPair[1].clientName },
  });

  useEffect(() => {
    if (
      data &&
      Object.keys(data).length > 0 &&
      response.data &&
      Object.keys(response.data).length > 0
    ) {
      setDataPool(data, linkId, response.data);
      getCoingeckoData(exchangeData);
    }
  }, [data, response]);

  return (
    <main className={classes.main_root}>
      <ToastContainer />
      <div className={classes.main_wrapper}>
        <Statistics loading={loading} />
        <TablePrice />
      </div>
      <InfoSection />
    </main>
  );
};

export default Main;
