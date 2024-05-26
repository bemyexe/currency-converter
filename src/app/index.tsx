import { ChangeEvent, useEffect, useState } from "react";
import CurrencyRow from "./components/shared/currency-row";
import useConversionRate from "./hooks";
import "./style.css";
import Loader from "./components/shared/loader";
import Error from "./components/shared/error";
import { valueType } from "antd/es/statistic/utils";

const DEFAULT_BASE_VALUE = 1;
const DEFAULT_TARGET_VALUE = 0;
const DEFAULT_TO_FIXED = 2;
const DEFAULT_BASE_CODE = "USD";
const DEFAULT_TARGET_CODE = "RUB";

const CurrencyConverter = () => {
  const [baseCode, setBaseCode] = useState(DEFAULT_BASE_CODE);
  const [targetCode, setTargetCode] = useState(DEFAULT_TARGET_CODE);
  const [baseValue, setBaseValue] = useState<valueType>(DEFAULT_BASE_VALUE);
  const [targetValue, setTargetValue] =
    useState<valueType>(DEFAULT_TARGET_VALUE);

  const { conversionRate, isLoading, error, clearError } = useConversionRate({
    baseCode,
    targetCode,
  });

  const onBaseValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setBaseValue(value);
      if (value && conversionRate) {
        const targetValue = (value * conversionRate).toFixed(DEFAULT_TO_FIXED);
        setTargetValue(targetValue);
      }
    }
  };

  const onTargetValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setTargetValue(value);
      if (value && conversionRate) {
        const baseValue = (value / conversionRate).toFixed(DEFAULT_TO_FIXED);
        setBaseValue(baseValue);
      }
    }
  };

  const onBaseCodeChange = (value: string) => {
    setBaseCode(value);
  };

  const onTargetCodeChange = (value: string) => {
    setTargetCode(value);
  };

  useEffect(() => {
    if (conversionRate) {
      setTargetValue((+baseValue * conversionRate).toFixed(DEFAULT_TO_FIXED));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversionRate]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <Error description={error} onClose={clearError} />}
      <div className="container">
        <CurrencyRow
          inputValue={baseValue}
          inputDisabled={isLoading}
          onInputChange={onBaseValueChange}
          selectValue={baseCode}
          onSelectChange={onBaseCodeChange}
        />
        <CurrencyRow
          inputValue={targetValue}
          inputDisabled={isLoading}
          onInputChange={onTargetValueChange}
          selectValue={targetCode}
          onSelectChange={onTargetCodeChange}
        />
      </div>
    </>
  );
};

export default CurrencyConverter;
