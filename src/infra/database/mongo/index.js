import mongoose from 'mongoose'

const { MONGO_CONNECT_STRING } = process.env

const CONNECTION_READY_CODE = 1

export default class MongoDB {
  constructor () {
    this.connection = null
  }

  connect = async () => {
    if (!this.connection || mongoose.connection.readyState !== CONNECTION_READY_CODE) {
      this.connection = await mongoose.connect(MONGO_CONNECT_STRING, {
        maxPoolSize: 10,
        connectTimeoutMS: 5000,
        serverSelectionTimeoutMS: 5000
      })
    }

    return this.connection
  }
}
