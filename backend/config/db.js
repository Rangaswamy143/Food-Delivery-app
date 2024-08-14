import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://rangaswamy:ranga123@cluster0.mbw9igb.mongodb.net/food-delivery-app"
    )
    .then(() => console.log("DB connected"));
};
