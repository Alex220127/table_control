import mongoose from 'mongoose'

const TableSchema = new mongoose.Schema({
  name: String,
  status: {
    type: String,
    enum: [ 'available', 'out_of_service', 'reserved' ]
  },
  waiter_id: mongoose.Schema.Types.ObjectId,
  table_code: String,
  display_name: String
}, {
  collection: 'tables',
  versionKey: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

TableSchema.index({ table_code }, { unique: true })

export default mongoose.models.Table ?? mongoose.model('Tables', TableSchema)
