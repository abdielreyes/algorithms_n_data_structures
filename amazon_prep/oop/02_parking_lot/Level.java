public class Level {

  private int floor;
  private ParkingSpot[] spots;
  private int availableSpots = 0;
  private static final int SPOTS_PER_ROW = 10;

  public Level(int flr, int numberSpots) {
    floor = flr;
    spots = new ParkingSpot[numberSpots];
    int largeSpots = numberSpots / 4;
    int bikeSpots = numberSpots / 4;
    int compactSpots = numberSpots - largeSpots - bikeSpots;
    for (int i = 0; i < numberSpots; i++) {
      VehicleSize sz = VehicleSize.SMALL;
      if (i < largeSpots) {
        sz = VehicleSize.LARGE;
      } else if (i < largeSpots + compactSpots) {
        sz = VehicleSize.SMALL;
      }
      int row = i / SPOTS_PER_ROW;
      spots[i] = new ParkingSpot(row, this, i, sz);
    }
    availableSpots = numberSpots;
  }

  public int availableSpots() { return availableSpots; }

  public boolean parkVehicle(Vehicle vehicle) {
    if (availableSpots() < vehicle.getSpotsNeeded()) {

      return false;
    }
    int spotNumber = findAvailableSpots(vehicle);
    if (spotNumber < 0) {
      return false;
    }
    return parkStartingAtSpot(spotNumber, vehicle);
  }
}
