var baseUrl = 'http://api.navasan.tech/latest/?api_key=';
var $key = "freeFqDXCAN6lCYNJaCXufCFAJUBIOUI";

function loadJSON(method, url, callback) {
    var xhr = new XMLHttpRequest;
    xhr.open(method, url);
    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response));
        };
    };
    xhr.send();
};

window.onload = function() {
    getPrice();
}
function getPrice() {
    loadJSON('GET', `${baseUrl}${$key}`, function(req) {
        var priceName = ["دلار","یورو","ین","لیر","پوند"];
        var priceValue = [
            req.usd_sell.value,
            req.eur.value,
            req.jpy.value,
            req.try.value,
            req.gbp.value
        ];
    var $price = document.getElementById('price');
    var price = 
    `<div class="d-flex align-items-center mb-4">
    <h5>قیمت دلار: <span class="bg-success text-light px-3 py-1 rounded">${req.usd_sell.value} تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.usd_sell.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت یورو: <span class="bg-success text-light px-3 py-1 rounded">${req.eur.value} تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.eur.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت پوند: <span class="bg-success text-light px-3 py-1 rounded">${req.gbp.value} تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.gbp.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت لیر: <span class="bg-success text-light px-3 py-1 rounded">${req.try.value} تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.try.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت ین: <span class="bg-success text-light px-3 py-1 rounded">${req.jpy.value} تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.jpy.date}<h6>
    </div>
    <hr>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت سکه بهار آزادی : <span class="bg-success text-light px-3 py-1 rounded">${req.bahar.value}000 تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.bahar.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت نیم سکه: <span class="bg-success text-light px-3 py-1 rounded">${req.nim.value}000 تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.nim.date}<h6>
    </div>
    <div class="d-flex align-items-center mb-4">
    <h5>قیمت ربع سکه: <span class="bg-success text-light px-3 py-1 rounded">${req.rob.value}000 تومان</span></h5>
    <h6 class="mx-3">تاریخ : ${req.rob.date}<h6>
    </div>`
    $price.innerHTML = price;
    // ChartJS
    let myChart = document.getElementById('myChart').getContext('2d');
    Chart.defaults.font.family = 'nazanin';
    Chart.defaults.plugins.tooltip.rtl = 'true';
    Chart.defaults.plugins.legend.rtl = 'true';
    Chart.defaults.plugins.legend.textDirection = 'rtl';
    let massPopChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: priceName,
        datasets: [
            {
                label: 'قیمت ارز',
                data: priceValue,
                backgroundColor: 'rgb(255, 205, 86, .1)',
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                tension: .5,
                fill: true
            }
        ]
    },
    options: {
        animations: {
            y: {
              easing: 'easeInOutElastic',
              from: (ctx) => {
                if (ctx.type === 'data') {
                  if (ctx.mode === 'default' && !ctx.dropped) {
                    ctx.dropped = true;
                    return 0;
                  }
                }
              }
            }
          },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
    });
    // ChartJS
    });
};
