var db=require("./db.js");

exports.sel_all=function(callback){
	var sql="select * from t_blogs";
	db.query(sql,[],callback);
}

exports.sel_id_by_data=function(uid,callback){
	var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
	db.query(sql,[uid],callback);
}

exports.ins_blog_by_data=function(title,content,cid,date,uid,callback){
	var sql="insert into t_blogs(TITLE,CONTENT,CATALOG_ID,ADD_TIME,WRITER) values(?,?,?,?,?)";
	db.query(sql,[title,content,cid,date,uid],callback);
}

exports.get_catalogs_by_id=function(uid,callback){
	var sql="select * from t_blog_catalogs where USER_ID=?";
	db.query(sql,[uid],callback);
}

exports.update_catalog_by_count=function(cid,callback){
	var sql="update t_blog_catalogs set BLOG_COUNT=BLOG_COUNT+1 where CATALOG_ID=?";
	db.query(sql,[cid],callback);
}

exports.checkCatalog=function(uid,callback){
	var sql="select * from t_blog_catalogs where USER_ID=?";
	db.query(sql,[uid],callback);
}

exports.add_catalog=function(cname,uid,callback){
	var sql="insert into t_blog_catalogs(NAME,USER_ID) values(?,?)";
	db.query(sql,[cname,uid],callback);
}

exports.sel_data_by_bid=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID=?";
	db.query(sql,[bid],callback);
}

exports.update_data=function(title,content,hid,callback){
	var sql="update t_blogs set TITLE=?,CONTENT=? where BLOG_ID=?";
	db.query(sql,[title,content,hid],callback);
}

exports.del_data_by_bid=function(bid,callback){
	var sql="delete from t_blogs where BLOG_ID=?";
	db.query(sql,[bid],callback);
}

exports.update_hits_by_bid=function(bid,callback){
	var sql="update t_blogs set CLICK_RATE=CLICK_RATE+1 where BLOG_ID=?";
	db.query(sql,[bid],callback);
}

//上一页数据
exports.get_up_by_one=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID<? ORDER BY BLOG_ID desc limit 1";
	db.query(sql,[bid],callback);
}

//下一页数据
exports.get_down_by_one=function(bid,callback){
	var sql="select * from t_blogs where BLOG_ID>? ORDER BY BLOG_ID asc limit 1";
	db.query(sql,[bid],callback);
}