# Parking Lot (Object Oriented System Design)

## Assumptions

- The parking lot has multiple levels. Each level has a row of spots.
- The parking lot can park motorcycles, cars, and buses.
- The parking lot has motorcycle spots, compact spots, and large spots.
- A motorcycle can park in any spot
- A car can park in either a single compact spot or a single large spot.
- A bus can park in five large spots taht are consequitive and within the same row. It cannot park in small spots

## Diagram

```
classDiagram
direction TB
    class Vehicle {
    }

    class Bus {
    }

    class Car {
    }

    class Motorcycle {
    }

    class ParkingLot {
    }

    class Level {
    }

    class ParkingSpot {
    }

    Bus --|> Vehicle
    Car --|> Vehicle
    Motorcycle --|> Vehicle
    Level "1" --* "*" ParkingLot : <br>
    ParkingSpot "1" -- "*" Level
    Vehicle "0" --o "*" ParkingLot : <br>

```
