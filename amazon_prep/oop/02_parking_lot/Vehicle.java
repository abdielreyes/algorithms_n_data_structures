import java.util.ArrayList;

public abstract class Vehicle {
  protected ArrayList<ParkingSpot> parkingSpots = new ArrayList<ParkingSpot>();
  protected String licensePlate;
  protected int spotsNeeded;
  protected int VehicleSize size;
  // insert setters and getters for spots needed
  public int getSpotsNeeded() { return spotsNeeded; }
  public void setSpotsNeeded(int spotsNeeded) {
    this.spotsNeeded = spotsNeeded;
  }
  public void parkInSpot(ParkingSpot spot) { parkingSpots.add(spot); }
  public void clearSpots() {
    for (ParkingSpot spot : parkingSpots) {
      spot.removeVehicle();
    }
    parkingSpots.clear();
  }
  public abstract boolean canFitInSpot(ParkingSpot spot);
  public abstract void print();
}
