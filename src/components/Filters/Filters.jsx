import Select from "react-select";
import { FiltersLabel, FiltersList } from "./Filters.styled";
import { selectStyles } from "./customSelectStyle";

const languagesOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const levelOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const priceOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Filters = () => {
  return (
    <FiltersList className="teachers-container">
      <li>
        <FiltersLabel htmlFor="languages" />
        <Select
          name="languages"
          id="languages"
          options={languagesOptions}
          styles={selectStyles}
        ></Select>
      </li>
      <li>
        <FiltersLabel htmlFor="level" />
        <Select
          name="level"
          id="level"
          options={levelOptions}
          styles={selectStyles}
        ></Select>
      </li>
      <li>
        <FiltersLabel htmlFor="price" />

        <Select
          name="price"
          id="price"
          options={priceOptions}
          styles={selectStyles}
        ></Select>
      </li>
    </FiltersList>
  );
};

export default Filters;
