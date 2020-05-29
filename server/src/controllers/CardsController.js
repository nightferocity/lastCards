import PostModel from "../models/Post";

class CardsController {
    index(req, res) {
        PostModel.find().then((err, cards) =>{
            if (err){
                return res.send(err);
            }
            res.json(cards);
        });
    }

    create(req,res) {
        const  data = req.body;

        const post = new PostModel({
            front: data.front,
            back: data.back
        });

        post.save().then(() => {
            res.send({status:'ok'});
        });
    }

    read(req,res){
        PostModel.findOne({_id: req.params.id}).then(post => {
            if (!post) {
                res.send({error: 'not found'});
            } else {
                res.json({status:'updated'});
            }
        });
    }

    update(req, res) {
        PostModel.findByIdAndUpdate(req.params.cardId, {$set: req.body}, err => {
            if (err) {
                res.send(err);
            }
            res.json({status:'updated'});
        });
    }

    delete(req, res) {
        PostModel.remove({
            _id: req.params.cardId
        }).then(post => {
            if (post) {
                res.json({status: 'deleted'});
            } else {
                res.json({status: 'error'});
            }
        })
    }
}

export default CardsController;