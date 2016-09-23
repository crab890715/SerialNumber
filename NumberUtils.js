(function (root, factory) {
    var NumberUtils = factory(root);
    if (typeof define === 'function' && define.amd) {
        // AMD
        // define([], factory);
        define('NumberUtils', function() { return NumberUtils; });
    } else if (typeof exports === 'object') {
        // Node.js
        module.exports = NumberUtils;
    } else {
        // Browser globals
        root.NumberUtils = NumberUtils;
    }
})(this, function (window) {
	var str = "cvbnmQWERT67890qwerjklzxYUIOPAStyuio12HJKLZXCV345pasdfghDFGBNM";
	return {
		SerialNumber : function(len,c){
			var _id = 0;
			var _ch = c;
			var _modelNum=function(){
				var n = "";
				for(var i = 0;i<len-_id.toString().length;i++){
					n += _ch.toString();
				}
				return n;
			};
			return {
				nextNum :function(){
					_id = parseInt(_id, 10) + 1;
					return _modelNum()+_id;
				},
				nextInt : function(){
					_id = _id +1;
					return _id;
				}
			};
		},
		random:function(i){
			i += "";
			var result = "";
			for(var m=0;m<i.length;m++){
				result+=str[i[m]*6+parseInt(Math.random()*6,10)];
			}
			console.log(result);
			return result;
		},
		number:function(s){
			var result = "";
			for(var i=0;i<s.length;i++){
				result+=(parseInt(str.indexOf(s[i])/6,10)+"");
			}
			return result;
		}
		
	};
	});
	