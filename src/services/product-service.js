import { ObjectId } from 'mongodb';
import ProductModel from '../schema/product-schema.js';

export class ProductService {

  constructor() { }

  async create(product) {
    await ProductModel.create(product);
  }

  async findAll() {
    return await ProductModel.find({});
  }

  async findById(id) {
    return await ProductModel.findById(ObjectId(id));
  }

  async sellProducts(id) {
    const product = await this.findById(id);
    if(product && product.stock > 0) {
      product.stock = product.stock - 1;
      return await ProductModel.updateOne({ _id: ObjectId(id) }, product);
    }
    return null;
  }
}