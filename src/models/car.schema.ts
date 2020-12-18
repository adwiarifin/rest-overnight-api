import { format } from 'path';
import { Schema, model, Document } from 'mongoose';

export interface Car extends Document {
    year: number;
    carModel: string;
    make: string;
}

const CarSchema = new Schema<Car>({
    year: {
        type: Number,
        required: true,
    },
    carModel: {
        type: String,
        required: true,
    },
    make: {
        type: String,
        required: true,
    }
});

export const CarModel = model<Car>("Car", CarSchema);