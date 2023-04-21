// Strategies are functions. Allow to swatch between fn very easily....
// IE -> Shipping cost calculations

function FedEx() {
  this.calculate = (package) => {
    // FedEx calculations
    return 2.45;
  };
}

function UPS() {
  this.calculate = (package) => {
    // UPS calculations
    return 1.5;
  };
}

function USPS() {
  this.calculate = (package) => {
    // USPS calculations
    return 4.75;
  };
}

function Shipping() {
  this.company = '';
  this.setCompany = (company) => {
    this.company = company;
  };

  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();

const package = { from: 'Alabama', to: 'Georgia', weight: 2.35 };

const shipping = new Shipping();

shipping.setCompany(fedex);
console.log('Fedex', shipping.calculate(package));

shipping.setCompany(ups);
console.log('UPS', shipping.calculate(package));

shipping.setCompany(usps);
console.log('USPS', shipping.calculate(package));
