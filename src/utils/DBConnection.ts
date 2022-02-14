import mongoose from 'mongoose';

const connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://senthil:FhcyHAY6L6hvrNt@cluster0.zugd4.mongodb.net/poorvika")    
        console.log("Data base connected");
    } catch (error: any) {
        console.log("Data base Connection Error", error.message);
    }
}

export default connection;