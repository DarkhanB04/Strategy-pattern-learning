//our strategy for salary
class SalaryStrategy {
  constructor(payment) {
    this.salary = payment.salary;
  }
  paymentAmount() {
    return this.salary.toFixed();
  }
}
//our strategy for dailySalary
class DailyStrategy {
  constructor(payment) {
    this.dailyRate = payment.dailyRate;
    this.numberOfHours = payment.numberOfHours;
  }
  paymentAmount() {
    return this.dailyRate * this.numberOfHours;
  }
}

class Employee {
  constructor(employeeDetails, payment) {
    this.name = employeeDetails.name;
    this.payment = payment;
    this.salary = payment.salary;
    this.dailyRate = payment.dailyRate;
    this.numberOfHours = payment.numberOfHours;
  }

  sendPayment() {
    var strategy;
    if (this.dailyRate) {
      strategy = new DailyStrategy(this.payment);
    } else {
      strategy = new SalaryStrategy(this.payment);
    }
    var paymentAmount = strategy.paymentAmount();
    console.log(`Sending ${paymentAmount} tenge to ${this.name}`);
  }
}

const darkhan = new Employee({ name: "Darkhan" }, { salary: 800000 });
darkhan.sendPayment();
const tairzhan = new Employee(
  { name: "Tairzhan" },
  { dailyRate: 5000, numberOfHours: 8 }
);
tairzhan.sendPayment();
