import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  active: Boolean,
  profile: {
    type: String,
    enum: [ 'admin', 'waiter' ]
  },
  password: String,
  last_access_at: Date
}, {
  versionKey: false,
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

UserSchema.index({ email }, { unique: true })

export default mongoose.models.User ?? mongoose.model('Users', UserSchema)
