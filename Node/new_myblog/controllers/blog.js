var Blog_model=require("../models/blog_model.js");
var moment=require("moment");

exports.all=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.update_hits_by_bid(bid,function(err,data){
		if(data.affectedRows>0){
			Blog_model.sel_data_by_bid(bid,function(err,data){
				if(data.length>0){
					var blog_data_one=data[0];
					//console.log(blog_data_one);
					Blog_model.get_up_by_one(bid,function(err,data){
						if(data.length>0){
							var up_data=data[0];
						}else{
							var up_data="";
						}

						//console.log(up_data);
						Blog_model.get_down_by_one(bid,function(err,data){
							if(data.length>0){
								var down_data=data[0];
							}else{
								var down_data="";
							}

							//console.log(down_data);
							res.render("viewPost_logined",{
								'sess':req.session,
								'maindata':blog_data_one,
								'predata':up_data,
								'nextdata':down_data,
							});
						});
					});
				}
			})
		}
	});

	

	

	
}

exports.del=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.del_data_by_bid(bid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/index");
		}
	})
}

exports.do_update=function(req,res,next){
	console.log(12345);

	var title=req.body.title;
	var content=req.body.content;
	var hid=req.body.hid;

	console.log(title);
	console.log(content);
	console.log(hid);
	Blog_model.update_data(title,content,hid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/index");
			//console.log(data);
		}
	})
}

exports.update=function(req,res,next){
	var bid=req.query.bid;
	Blog_model.sel_data_by_bid(bid,function(err,data){
		if(data.length>0){
			res.render("updateBlog",{
				"sess":req.session,
				"blog":data[0],
			});
		}
	})
}

exports.addBlogCatalog=function(req,res,next){
	var cname=req.body.name;
	var uid=req.session.USER_ID;
	Blog_model.add_catalog(cname,uid,function(err,data){
		if(data.affectedRows>0){
			res.redirect("/blogCatalogs");
		}
	})
}

exports.Catalog=function(req,res,next){
	uid=req.session.USER_ID;
	Blog_model.checkCatalog(uid,function(err,data){
		//console.log(data);
		res.render("blogCatalogs",{
			"sess":req.session,
			"catalogs":data,
		})
	})
}

exports.index=function(req,res,next){

	//所有的文章都查出来
	/*
	Blog_model.sel_all(function(err,data){
		//console.log(data);
		res.render("index_logined",{
			'blogs':data,
			'sess':req.session,
		})
	});*/
	var uid=req.session.USER_ID;
	Blog_model.sel_id_by_data(uid,function(err,data){
		console.log(data);
		res.render("index_logined",{
			'blogs':data,
			'sess':req.session,
		})
	});
	//res.render("index_logined")
}


exports.add=function(req,res,next){
	var uid=req.session.USER_ID;
	Blog_model.get_catalogs_by_id(uid,function(err,data){
		res.render("newBlog",{
			"sess":req.session,
			"catalogs":data
		});
	})	
}

exports.do_add=function(req,res,next){
	//title content date uid
	var title=req.body.title;
	var content=req.body.content;
	var date=moment().format();
	var uid=req.session.USER_ID;
	var cid=req.body.catalog;
	console.log(cid);

	
	Blog_model.ins_blog_by_data(title,content,cid,date,uid,function(err,data){
		if(data.affectedRows>0){
			Blog_model.update_catalog_by_count(cid,function(err,data){
				//console.log(data);
				if(data.affectedRows>0){
					res.redirect("/index");
				}
				
			})
			
		}
	})

	//var date=new Date();
	//console.log(moment.locale('cs'));
	//console.log(moment().format());

}