export const selectStyles = {
  control: (state) => ({
    ...state,
    borderRadius: "14px",
    border: 0,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.1,
    color: "#121417",
    width: "221px",
    // padding: "16px 148px 16px 18px",
    // width: '221px',
    height: "48px",
  }),
  indicatorSeparator: () => ({}),
  dropdownIndicator: () => ({
    paddingRight: "14px",
    stroke: "#121417",
  }),
  // valueContainer: (state) => ({
  //   ...state,
  //   fontWeight: 500,
  //   fontSize: "18px",
  //   lineHeight: 1.1,
  //   color: "#121417",
  // }),
  singleValue: (state) => ({
    ...state,
    fontWeight: 500,
    fontSize: "18px",
    lineHeight: 1.1,
    color: "#121417",
  }),
  menu: (state) => ({
    ...state,
    borderRadius: "12px",
    background: "#fff",
    padding: "14px 18px",
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      cursor: "pointer",
      color: isSelected || isFocused ? "#121417" : "rgba(18, 20, 23, 0.2)",
      background: "none",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: 1.11,
    };
  },
  //   option: (styles, { isFocused, isSelected }) => {
  //     return {
  //       ...styles,
  //       cursor: "pointer",
  //       color: isSelected || isFocused ? "#121417" : "rgba(18, 20, 23, 0.20)",
  //       background: "none",
  //       fontSize: "16px",
  //       fontWight: 500,
  //       lineHeight: 1.2,
  //     };
  //   },
  //   menu: (styles) => ({
  //     ...styles,
  //     borderRadius: "14px",
  //     border: "1px solid rgba(18, 20, 23, 0.05)",
  //     background: "#fff",
  //     boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.02)",
  //   }),
  //   placeholder: (styles) => ({
  //     ...styles,
  //     color: "#121417",
  //     fontSize: "18px",
  //     fontWeight: 500,
  //     lineHeight: 1.1,
  //   }),
};

// const style = {
//   control: (state) => ({
//     ...state,
//     borderRadius: "14px",
//     border: 0,
//     fontWeight: 500,
//     fontSize: "18px",
//     lineHeight: 1.1,
//     color: "#121417",
//     // padding: "16px 148px 16px 18px",
//     // width: 221px;
//     // height: 48px;
//   }),
//   indicatorSeparator: () => ({}),
//   dropdownIndicator: () => ({
//     stroke: "#121417",
//   }),
//   // valueContainer: (state) => ({
//   //   ...state,
//   //   fontWeight: 500,
//   //   fontSize: "18px",
//   //   lineHeight: 1.1,
//   //   color: "#121417",
//   // }),
//   singleValue: (state) => ({
//     ...state,
//     fontWeight: 500,
//     fontSize: "18px",
//     lineHeight: 1.1,
//     color: "#121417",
//   }),
//   menu: (state) => ({
//     ...state,
//     borderRadius: "12px",
//     background: "#fff",
//   }),
//   menuList: (state) => ({
//     ...state,
//     fontWeight: 500,
//     fontSize: "18px",
//     lineHeight: 1.11,
//     color: "rgba(18, 20, 23, 0.2)",
//     "&:hover": {
//       background: "none",
//       color: "#121417",
//     },
//   }),
// };
