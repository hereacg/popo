
import hashlib
import os.path
from wood import Wood
import pymongo as mongo
from tornado.web import UIModule


MONGOURL = "mongodb://localhost/popo"


configs = {
	'debug': True,
	'static_path': os.path.join('.','static'),
	'template_path': os.path.join('.','template'),
}


app = Wood(__name__,**configs)


_cli = mongo.MongoClient(MONGOURL)
_passages = _cli.passages
_comments = _cli.comments
_users = _cli.users


def find_user(user_id):
	return _users.find_one({
		'user_id': user_id
		})


@app.uimod('PassageCard')
class PassageCard(UIModule):
	def render(self,p):
		return self.render_string('passageCard.html',p=p,find_user=find_user)


@app.route(r'/')
def index(self):
	min_n = self.get_argument('min',0)
	max_n = self.get_argument('max',10)
	cur = _passages.find().sort({'date':1}).skip(min_n).limit(max_n-min_n)
	self.render('index.html',passages=cur)


if __name__ == "__main__":
	app.start(8000)
