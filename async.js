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
exports.all=function(req,res,next){
    var bid=req.query.bid;
	// Blog_model.update_hits_by_bid(bid,function(err,data){
        
    // }

	

}