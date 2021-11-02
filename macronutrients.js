const labels = ["Protein", "Carbohydrate", "Fat"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        "rgb(242, 95, 58)",
        "rgb(58, 242, 95)",
        "rgb(95, 58, 242)",
      ],
      //   borderColor: ["rgb(150, 25, 25)", "rgb(25, 150, 25)", "rgb(25, 25, 150)"],
      data: [36, 12, 10],
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  plugins: {
    subtitle: {
      display: true,
      text: "Custom Chart Subtitle",
      position: "bottom",
      padding: 20,
      font: {
        size: 24,
      },
    },
  },
};

const config = {
  type: "pie",
  data: data,
  options: options,
};

const macroChart = new Chart(
  document.getElementById("macro-nutrients-chart"),
  config
);
