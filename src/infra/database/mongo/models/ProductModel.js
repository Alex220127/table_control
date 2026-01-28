import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  active: Boolean,
  product_code: String,
  available_stock: Number
}, {
  collection: 'products',
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

ProductSchema.index({ product_code: 1 }, { unique: true })

export default mongoose.models.Product ?? mongoose.model('Products', ProductSchema)
