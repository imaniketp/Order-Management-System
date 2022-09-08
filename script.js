let orderStatuses = document.getElementsByClassName("order-status-block");
  
const executeOrder = () => {
  let orderId = document.getElementById("order-id-input").value;
  document.getElementById("order-id-input").value = "";
  document.getElementById("order-id-display").innerText = `Order Status for ID: AP-${orderId}`;

  orderStatuses[0].style.display ='block'
  orderStatuses[0].classList.add("btn-success");
  orderStatuses[0].classList.remove("btn-light");

  chefReceived()
    .then(pizzaSauceAdded)
    .then(firstLayerOfCheezeAdded)
    .then(toppingsAdded)
    .then(secondLayerOfCheezeAdded)
    .then(pizzaBaked)
    .then(oreganoAddedAndPacked)
    .then(packageReceivedAtCounter)
    .then(() => {
      orderStatuses[9].style.display ='block'
      orderStatuses[9].classList.add("btn-success");
      orderStatuses[9].classList.remove("btn-light");
    })
    .catch((err) => console.log(err));
};

const chefReceived = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[1].style.display ='block'
      orderStatuses[1].classList.add("btn-success");
      orderStatuses[1].classList.remove("btn-light");
      resolve();
    }, 2000);
  });
};

const pizzaSauceAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[2].style.display ='block'
      orderStatuses[2].classList.add("btn-success");
      orderStatuses[2].classList.remove("btn-light");
      resolve();
    }, 10000);
  });
};

const firstLayerOfCheezeAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[3].style.display ='block'
      orderStatuses[3].classList.add("btn-success");
      orderStatuses[3].classList.remove("btn-light");
      resolve();
    }, 5000);
  });
};

const toppingsAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[4].style.display ='block'
      orderStatuses[4].classList.add("btn-success");
      orderStatuses[4].classList.remove("btn-light");
      resolve();
    }, 12000);
  });
};

const secondLayerOfCheezeAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[5].style.display ='block'
      orderStatuses[5].classList.add("btn-success");
      orderStatuses[5].classList.remove("btn-light");
      resolve();
    }, 5000);
  });
};

const pizzaBaked = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[6].style.display ='block'
      orderStatuses[6].classList.add("btn-success");
      orderStatuses[6].classList.remove("btn-light");
      resolve();
    }, 15000);
  });
};

const oreganoAddedAndPacked = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[7].style.display ='block'
      orderStatuses[7].classList.add("btn-success");
      orderStatuses[7].classList.remove("btn-light");
      resolve();
    }, 8000);
  });
};

const packageReceivedAtCounter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      orderStatuses[8].style.display ='block'
      orderStatuses[8].classList.add("btn-success");
      orderStatuses[8].classList.remove("btn-light");
      resolve();
    }, 2000);
  });
};








