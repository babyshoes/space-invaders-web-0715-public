function Spaceship(name, crew){
  this.name = name;
  this.crew = crew;
  this.phasers = 5;
  this.shields = 4;
  this.cloaked = false;
  this.warpDrive = 'disengaged';
  this.determineCrewStatus();
  this.phasersCharge = 'uncharged';
}

Spaceship.prototype.determineCrewStatus = function() {
  if (this.crew.length > 0){
    this.docked = false;
    this.crew.forEach(function (member){
      member.currentShip = this
    }.bind(this));
  } else {
    this.docked = true;
  }
};


Spaceship.prototype.warpDrive = function () {
  this.warpDrive == 'disengaged';
};
