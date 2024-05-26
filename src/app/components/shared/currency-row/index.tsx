import { Col, Input, Row, Select, SelectProps } from "antd";
import { valueType } from "antd/es/statistic/utils";
import { FC } from "react";
import { CURRENCY } from "./currency-constants/currency";

interface CurrencyRowProps {
  inputValue: valueType;
  inputDisabled: boolean;
  onInputChange: () => void;
  selectValue: SelectProps;
  onSelectChange: () => void;
}

const CurrencyRow: FC<CurrencyRowProps> = ({
  inputValue,
  inputDisabled,
  onInputChange,
  selectValue,
  onSelectChange,
}) => {
  return (
    <Row gutter={15}>
      <Col xs={8} sm={12}>
        <Input
          placeholder="Enter amount"
          size="large"
          type="number"
          value={inputValue}
          onChange={onInputChange}
          disabled={inputDisabled}
        />
      </Col>
      <Col xs={8} sm={12}>
        <Select
          showSearch
          optionFilterProp="label"
          size="large"
          placeholder="Select currency"
          value={selectValue}
          options={CURRENCY}
          onChange={onSelectChange}
        />
      </Col>
    </Row>
  );
};

export default CurrencyRow;
