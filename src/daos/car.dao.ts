import { CarModel, Car } from "../models/car.schema";

export class CarDao {
  public async fetchAll(): Promise<Car[]> {
    return await CarModel.find({});
  }

  public async create(data: any): Promise<Car | null> {
    return await CarModel.create(data);
  }
}
