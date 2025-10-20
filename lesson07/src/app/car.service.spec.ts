import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Car, CarService } from './car.service';
import { DATA } from './MOCK_DATA';

describe('CarService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cars', () => {
    const cars: Car[] = [];

    service.getAllCars().subscribe((car) => {
      cars.push(car);
    });

    expect(cars.length).toBeGreaterThan(0);
    expect(cars[0].make).toBeDefined();
  });

  it('should get cars by make', fakeAsync(() => {
    const cars: Car[] = [];

    service.getAllCars().subscribe((car) => {
      cars.push(car);
    });
    tick();

    const carMake = cars[0].make;
    service.getCarsByMake(carMake);

    const carsByMake: Car[] = [];

    service.getAllCars().subscribe((car) => {
      carsByMake.push(car);
    });
    tick();

    carsByMake.forEach((car) => {
      expect(car.make).toBe(carMake);
    });
  }));

  it('should delete a car', fakeAsync(() => {
    const cars: Car[] = [];

    service.getAllCars().subscribe((car) => {
      cars.push(car);
    });
    tick();

    const firstCar = cars[0];

    service.remove(firstCar.id);

    const carsAfter: Car[] = [];

    service.getAllCars().subscribe((car) => {
      carsAfter.push(car);
    });
    tick();

    carsAfter.forEach((car) => expect(car.id === firstCar.id).toBeFalse());
  }));

  it('should clear cars', fakeAsync(() => {
    const cars: Car[] = [];

    service.getCars().subscribe((serviceCars) => {
      serviceCars.forEach((c) => cars.push(c));
    });
    tick();

    // remove one car
    const firstCar = cars[0];
    service.remove(firstCar.id);

    // reset the array
    service.clear();

    const carsAfter: Car[] = [];

    service.getCars().subscribe((serviceCars) => {
      serviceCars.forEach((c) => carsAfter.push(c));
    });
    tick();

    expect(carsAfter.length).toBe(DATA.length);
  }));
});
