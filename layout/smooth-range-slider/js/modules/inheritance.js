class Car {
  constructor(name, year, maxSpeed, engineType) {
    this.name = name; 
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineType = engineType;
  }

  showCarInfo() {
    return `
      name: ${this.name}, 
      year: ${this.year},
      maxSpeed: ${this.maxSpeed},
      engineType: ${this.engineType}
    `;
  }
}

class MVW extends Car {
  constructor(name, year, maxSpeed) {
    super(name, year, maxSpeed, 'internal-combustion-engine');
  }
}

class Tesla extends Car {
  constructor(name, year, maxSpeed, batteryCapacity) {
    super(name, year, maxSpeed, 'electric-engine');
    this.batteryCapacity = batteryCapacity;
    this._maxBatteryCapacity = 48000;
  }

  reCharge(charge) {
    for (let i = this.batteryCapacity; i < this._maxBatteryCapacity; i++) {
      this.batteryCapacity += charge;
    }
  }
}