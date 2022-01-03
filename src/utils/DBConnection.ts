import mongoose from 'mongoose';

const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/poorvika_poc")    
        console.log("Data base connected");
    } catch (error: any) {
        console.log("Data base Connection Error", error.message);
    }
}

export default connection;