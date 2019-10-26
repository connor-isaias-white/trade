// changes the data when you buy
function trade(item, type) {
  var data = {};
  data.transaction = [item, type];
  var msg = $.ajax({
    type: "GET",
    url: "/trade/" + JSON.stringify(data),
    async: false
  }).responseText;
  if (msg == "true") {
    var quantity = document
      .getElementById("Amount " + item)
      .innerHTML.split(" ");
    quantity[1] = parseInt(quantity[1]) + type;
    document.getElementById("money").innerHTML =
      parseInt(document.getElementById("money").innerHTML) -
      parseInt(document.getElementById("Cost " + item).innerHTML) * type;
    document.getElementById(
      "Amount " + item
    ).innerHTML = quantity.join().replace(",", " ");
  }
}

function bank(type) {
  var data = {};
  data.transaction = [$('#transamount').val(), type];
  var msg = $.ajax({
    type: "GET",
    url: "/bank/" + JSON.stringify(data),
    async: false
  }).responseText;
  console.log(msg)
  if (msg == 'true') {
    $('#AmountBank').text(parseInt($('#AmountBank').text()) + parseInt($('#transamount').val()) * parseInt(type));
    $('#transamount').val(0);
    $('#money').text(parseInt($('#money').text()) - parseInt($('#transamount').val()) * parseInt(type));
  }
}


var session = JSON.parse($.ajax({
  type: "GET",
  url: "/session",
  async: false
}).responseText);


for (var i = 0; i < session.length - 1; i++) {
  new Chart(document.getElementById(session[i]["name"] + "-chart"), {
    type: "line",
    data: {
      labels: [...Array(session[session.length - 1]['day']).keys()],
      datasets: [{
          data: session[i]["price"]["China"],
          label: "China",
          borderColor: "#3e95cd",
          backgroundColor: "#3e95cd",
          fill: false
        },
        {
          data: session[i]["price"]["Australia"],
          label: "Australia",
          borderColor: "#8e5ea2",
          backgroundColor: "#8e5ea2",
          fill: false
        },
        {
          data: session[i]["price"]["France"],
          label: "France",
          borderColor: "#3cba9f",
          backgroundColor: "#3cba9f",
          fill: false
        },
        {
          data: session[i]["price"]["America"],
          label: "America",
          borderColor: "#e8c3b9",
          backgroundColor: "#e8c3b9",
          fill: false
        },
        {
          data: session[i]["price"]["England"],
          label: "England",
          borderColor: "#c45850",
          backgroundColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Price"
      },
      legend: {
        position: "right"
      },
      tooltips: {
        mode: 'index'
      },
      animation: {
        duration: 1000,
        easing: "easeInOutElastic"
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Cost ($)'
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Week'
          }
        }]
      }
    }
  });
}

var Interest = JSON.parse($.ajax({
  type: "GET",
  url: "/interest",
  async: false
}).responseText);

new Chart(document.getElementById("bank-chart"), {
  type: "line",
  data: {
    labels: [...Array(session[session.length - 1]['day']).keys()],
    datasets: [{
      data: Interest,
      label: "Interest rate",
      borderColor: "#3e95cd",
      backgroundColor: "#3e95cd",
      fill: false
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: "Price"
    },
    legend: {
      position: "right"
    },
    tooltips: {
      mode: 'index'
    },
    animation: {
      duration: 1000,
      easing: "easeInOutElastic"
    },
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'rate (%)'
        }
      }],
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Week'
        }
      }]
    }
  }
});
