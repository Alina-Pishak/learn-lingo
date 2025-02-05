import Select from "react-select";

import { FiltersLabel, FiltersList } from "./Filters.styled";
import { selectStyles } from "./customSelectStyle";
import { Button } from "../Button/Button.styled";

const languageOptions = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "French", label: "French" },
  { value: "German", label: "German" },
  { value: "Mandarin Chinese", label: "Mandarin Chinese" },
  { value: "Italian", label: "Italian" },
  { value: "Korean", label: "Korean" },
  { value: "Vietnamese", label: "Vietnamese" },
];

const levelOptions = [
  { value: "A1 Beginner", label: "A1 Beginner" },
  { value: "A2 Elementary", label: "A2 Elementary" },
  { value: "B1 Intermediate", label: "B1 Intermediate" },
  { value: "B2 Upper-Intermediate", label: "B2 Upper-Intermediate" },
];
const priceOptions = [
  { value: 10, label: "10 $" },
  { value: 20, label: "20 $" },
  { value: 30, label: "30 $" },
  { value: 40, label: "40 $" },
];

// eslint-disable-next-line react/prop-types
const Filters = ({ setFilters, filters }) => {
  console.log(filters);
  function handleChangeLanguage({ value: language }) {
    setFilters((prev) => ({ ...prev, language }));
  }
  function handleChangeLevel({ value: level }) {
    setFilters((prev) => ({ ...prev, level }));
  }
  function handleChangePrice({ value: price }) {
    setFilters((prev) => ({ ...prev, price }));
  }
  function handleReset() {
    setFilters({ level: "", language: "", price: null });
  }
  return (
    <FiltersList className="teachers-container">
      <li>
        <FiltersLabel htmlFor="languages">Languages</FiltersLabel>
        <Select
          name="languages"
          id="languages"
          options={languageOptions}
          styles={selectStyles}
          onChange={handleChangeLanguage}
          value={
            filters.language
              ? { value: filters.language, label: filters.language }
              : null
          }
        ></Select>
      </li>
      <li>
        <FiltersLabel htmlFor="level">Level of knowledge</FiltersLabel>
        <Select
          name="level"
          id="level"
          options={levelOptions}
          styles={selectStyles}
          onChange={handleChangeLevel}
          value={
            filters.level
              ? { value: filters.level, label: filters.level }
              : null
          }
        ></Select>
      </li>
      <li>
        <FiltersLabel htmlFor="price">Price</FiltersLabel>

        <Select
          name="price"
          id="price"
          options={priceOptions}
          styles={selectStyles}
          onChange={handleChangePrice}
          value={
            filters.price
              ? { value: filters.price, label: `${filters.price} $` }
              : null
          }
        ></Select>
      </li>
      <Button
        style={{ width: "200px", height: "50px", margin: 0, marginTop: "auto" }}
        onClick={handleReset}
      >
        Reset
      </Button>
    </FiltersList>
  );
};

export default Filters;
