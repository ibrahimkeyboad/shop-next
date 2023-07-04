import connectDB from '@/db';
import Product from '@/models/productModel';
import { users } from './users';
import { products } from './product';
import User from '@/models/userModel';

connectDB();

const importData = async () => {
  await Product.deleteMany();
  await User.deleteMany();
  const createdUsers = await User.insertMany(users);

  const adminUser = createdUsers[0]._id;

  console.log(adminUser);

  const sampleProducts = products.map((product) => {
    return { user: adminUser, ...product };
  });

  console.log(sampleProducts);

  await Product.insertMany(sampleProducts);

  console.log('Data Imported!'.green.inverse);
  process.exit();
};

if (process.argv[2] === '--i') {
  importData();
}
