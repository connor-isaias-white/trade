new Chart(document.getElementById("line-chart"), {
  type: "line",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "China",
        borderColor: "#3e95cd",
        fill: false
      },
      {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Australia",
        borderColor: "#8e5ea2",
        fill: false
      },
      {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "France",
        borderColor: "#3cba9f",
        fill: false
      },
      {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "America",
        borderColor: "#e8c3b9",
        fill: false
      },
      {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "England",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    responsive: false,
    title: {
      display: true,
      text: "Price"
    }
  }
});
