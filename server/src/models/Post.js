import mongoose, {Schema} from 'mongoose';

const PostSchema = new Schema(
    {
        front: String,
        back: String
    },
    {
        timestamps:true
    }
);

const Post = mongoose.model('Post', PostSchema);

export default Post;