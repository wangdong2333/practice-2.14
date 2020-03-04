//创建Kvue
// new Kvue({
//     data:{
//         msg:"hello world"
//     }
// })

class Kvue{
    constructor(options){
        this.$options = options;//做一个缓存

        //数据响应话
        this.$data = options.data;
        this.observe(this.$data);

    }

    observe(value){
        if(!value || typeof value !== "object"){
            return;
        }
        //遍历该对象
        Object.keys(value).forEach((key) =>{
            this.defineReactive(value,key,value[key]);
        })

    }

    //数据响应话函数
    defineReactive(obj,key,val){
        this.observe(val);//递归 解决数据嵌套

       Object.defineProperty(obj,key,{
            get(){
                return val;
            },
            set(newVal){
                if(newVal === val){
                    return;
                }
                val = newVal;
                console.log(`${key}已经变为:${val}`);
            }
       })
    }
}