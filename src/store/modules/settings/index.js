const state = {
  dateFormats: {
    1: { Description: "MM/DD/YYYY", Format: "MM/dd/yyyy", datePickerFormat: "m/d/yy" },
    2: { Description: "DD/MM/YYYY", Format: "dd/MM/yyyy", datePickerFormat: "d/m/yy" },
    3: { Description: "YYYY/MM/DD", Format: "yyyy/MM/dd", datePickerFormat: "yy/m/d" }
  },
  selectedDateFormat: 2,
};

export default {
  namespaced: true,
  state,
};
