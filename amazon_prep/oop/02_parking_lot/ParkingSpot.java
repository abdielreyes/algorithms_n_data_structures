public class ParkingSpot {

  private Vehicle vehicle;
  private VehicleSize size;
  private int row;
  private int level;
  private int spotNumber;

  public ParkingSpot(int row, Level level, int spotNumber, VehicleSize size) {
    this.row = row;
    this.level = level;
    this.spotNumber = spotNumber;
    this.size = size;
  }

  public boolean isAvailable() { return vehicle == null; }

  public boolean canFitVehicle(Vehicle vehicle) {
    return isAvailable() && vehicle.canFitInSpot(this);
  }

  public boolean park(Vehicle v) {
    if (!canFitVehicle(v)) {
      return false;
    }
    vehicle = v;
    vehicle.parkInSpot(this);
    return true;
  }

  public void removeVehicle() {
    if (vehicle == null) {
      return;
    }
    level.spotFreed();
    vehicle = null;
  }

  public int getRow() { return row; }

  public int getLevel() { return level; }

  public int getSpotNumber() { return spotNumber; }

  public VehicleSize getSize() { return size; }
}
