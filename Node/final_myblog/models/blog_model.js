var db=require("./db.js");

exports.sel_id_by_data=function(uid,callback){
	var sql="select * from t_users,t_blogs,t_blog_catalogs where t_users.USER_ID=t_blogs.WRITER and t_blogs.CATALOG_ID=t_blog_catalogs.CATALOG_ID and t_blogs.WRITER=?";
	db.query(sql,[uid],callback);
}

exports.get_catalogs_by_id=function(uid,callback){
	var sql="select * from t_blog_catalogs where USER_ID=?";
	db.query(sql,[uid],callback);
}

exports.ins_blog_by_data=function(title,content,cid,date,uid,callback){
	var sql="insert into t_blogs(TITLE,CONTENT,CATALOG_ID,ADD_TIME,WRITER) values(?,?,?,?,?)";
	db.query(sql,[title,content,cid,date,uid],callback);
}

