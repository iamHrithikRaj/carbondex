from flask import Flask
from flask_restful import Api, Resource, reqparse, abort, fields, marshal_with
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

# class VideoModel(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(100), nullable=False)
#     views = db.Column(db.Integer, nullable=False)
#     likes = db.Column(db.Integer, nullable=False)

#     def __repr__(self):
#         return f"Video(name = {name}, views = {views}, likes = {likes})"

# # db.create_all()

# video_put_args = reqparse.RequestParser()
# video_put_args.add_argument("name", type=str, help="Name of the video is required", required=True)
# video_put_args.add_argument("views", type=int, help="Views of the video is required", required=True)
# video_put_args.add_argument("likes", type=int, help="Likes on the video is required", required=True)


# video_update_args = reqparse.RequestParser()
# video_update_args.add_argument("name", type=str, help="Name of the video is required")
# video_update_args.add_argument("views", type=int, help="Views of the video is required")
# video_update_args.add_argument("likes", type=int, help="Likes on the video is required")

# resource_fields = {
#     'id' : fields.Integer,
#     'name' : fields.String,
#     'views' : fields.Integer,
#     'likes' : fields.Integer
# }

# Resource
class AddressQueryHandle(Resource):

    # @marshal_with(resource_fields)
    # def get(self, video_id):
    #     result = VideoModel.query.filter_by(id=video_id).first()
    #     if not result:
    #         abort(404, message="Video not found...")
    #     return result

    # @marshal_with(resource_fields)
    def post(self): # this will be changed by address
        # args = video_put_args.parse_args() # TODO: new parse args
        # result = VideoModel.query.filter_by(id=video_id).first() # this code is to check if id is in DB
        # # line 54-55 to be removed
        # if result: 
        #     abort(409, message="Video id taken...") 


        # video = VideoModel(id=video_id,name=args['name'],views=args['views'],likes=args['likes'])
        # db.session.add(video)
        # db.session.commit() 
        return {"Hello World"}, 201

    
api.add_resource(AddressQueryHandle, "/")

if __name__ == "__main__":
    app.run(debug=True)


