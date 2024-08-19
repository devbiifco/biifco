import mongoose, { Document, Schema } from 'mongoose';

export interface IAsset extends Document {
  name: string;
  description: string;
  tokenId: string;
  owner: mongoose.Schema.Types.ObjectId;
  metadata: string;
  createdAt: Date;
  updatedAt: Date;
}

const AssetSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    tokenId: { type: String, required: true, unique: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    metadata: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IAsset>('Asset', AssetSchema);
