import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  code: String,
  name: String,
  quantity: Number,
  unit_price: Number
}, {
  _id: false
})

const WaiterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String
}, {
  _id: false
})

const TabSchema = new mongoose.Schema({
  value: Number,
  waiter: WaiterSchema,
  opened_at: Date,
  closed_at: Date,
  products: [ ProductSchema ],
  table_code: String,
}, {
  collection: 'tabs',
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

TabSchema.index({ table_code })

export default mongoose.models.Tab ?? mongoose.model('Tabs', TabSchema)
