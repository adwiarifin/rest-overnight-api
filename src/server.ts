import express from "express";
import mongoose from 'mongoose';
import { Server } from "@overnightjs/core";
import { CarController } from './controllers/car.controller';
import { AuthController } from './controllers/auth.controller';

export default class FSTServer extends Server {
  constructor() {
    super(true);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.setupControllers();
    this.setupDatabase();
  }

  setupControllers() {
    const carController = new CarController();
    const authController = new AuthController();
    super.addControllers([
      carController,
      authController,
    ]);
  }

  setupDatabase() {
    const connString = 'mongodb://localhost:27017/rest';
    mongoose.connect(connString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }

  /**
   * 
   * @param {Integer} port - Port which the server will listen
   */
  public start(port: number): void {
    this.app.listen(port);
  }
}
