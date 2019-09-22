export class CounterService {
  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;

  incrementActiveToInactiveCounter() {
    this.activeToInactiveCounter++;
    console.log(
      "ActivetoInactive counter incremented " + this.activeToInactiveCounter
    );
  }

  incrementInactiveToActiveCounter() {
    this.inActiveToActiveCounter++;
    console.log(
      "InactiveToActive counter incremented " + this.inActiveToActiveCounter
    );
  }
}
