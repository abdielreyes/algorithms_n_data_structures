public class Bus extends Vehicle {
    public Bus(String licensePlate) {
        this.licensePlate = licensePlate;
        this.size = VehicleSize.LARGE;
        this.spotsNeeded = 5; // A bus typically needs 5 parking spots
    }

    public void canFitInSpot(ParkingSpot spot) {
        // A bus can fit in a spot if it is large enough
        return spot.getSize() == VehicleSize.LARGE;
    }

    public void print() {
        System.out.println("Bus with license plate: " + licensePlate);
    }
}
