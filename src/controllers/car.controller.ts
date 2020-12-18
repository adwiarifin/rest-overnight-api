import { Request, Response } from "express";
import { ClassMiddleware, Controller, Get, Post } from "@overnightjs/core";
import { CarDao } from "../daos/car.dao";
import { Car } from '../models/car.schema';
import { BAD_REQUEST, OK } from "http-status-codes";
import auth from '../middlewares/authentication';

@Controller("api/cars")
@ClassMiddleware(auth)
export class CarController {
  private carDao = new CarDao();

  @Get("")
  private async fetchAllCars(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.carDao.fetchAll();
      return res.status(OK).json(users);
    } catch (error) {
      return res.status(BAD_REQUEST).json({
        error: error.message,
      });
    }
  }

  @Post("")
  private async createNewCar(req: Request, res: Response): Promise<Response> {
    try {
      const { year, carModel, make } = req.body;
      const users = await this.carDao.create({ year, carModel, make });
      return res.status(OK).json(users);
    } catch (error) {
      return res.status(BAD_REQUEST).json({
        error: error.message,
      });
    }
  }
}
