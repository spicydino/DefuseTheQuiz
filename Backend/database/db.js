import mongoose from 'mongoose';
const dbConnect = async () => {
    await mongoose.connect('mongodb+srv://spicydino:Aditya123@cluster0.sptds.mongodb.net/');
}
export default dbConnect;  