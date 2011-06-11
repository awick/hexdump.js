// Hexdump.js 0.1.0
// (c) 2011 Dustin Willis Webber
// Hexdump is freely distributable under the MIT license.
// For all details and documentation:
// http://github.com/mephux/hexdump.js
var Hexdump;
Hexdump=function(){function f(a,b){this.hexdump=[];this.options={container:b.container||"",width:b.width||16,spacing:b.spacing||0,ascii:b.ascii||!1,lineNumber:b.lineNumber,html:b.html,style:{lineNumberLeft:b.style.lineNumberLeft||"",lineNumberRight:b.style.lineNumberRight||":",stringLeft:b.style.stringLeft||"|",stringRight:b.style.stringRight||"|",hexLeft:b.style.hexLeft||"",hexRight:b.style.hexRight||"",hexNull:b.style.hexNull||"....",stringNull:b.style.stringNull||" "}};var c=this.options.lineNumber;if(typeof c==
"undefined"||c==null)this.options.lineNumber=!0;c=this.options.html;if(typeof c=="undefined"||c==null)this.options.html=!0;if(this.options.spacing>a.length)this.options.spacing=a.length;if(this.options.width>a.length)this.options.width=a.length;this.data=a.match(RegExp(".{1,"+this.options.width+"}","g"));this.nullCount=this.options.width-this.data[this.data.length-1].length;for(c=this.stringCounter=this.hexCounter=0;c<this.data.length;c++){var d=this.process(this.data[c]);this.hexdump.push({data:d.data,
string:d.string,length:this.data[c].length,missing:this.options.width-this.data[c].length})}this.dump()}function g(a){var b=a.charCodeAt(0).toString(16);return b==9?".":b==127?".":a}function h(a){for(;0<a.length;)return a=a.charCodeAt(0).toString(16),a.length<2?"000"+a:a.length==4?a:a.length==3?"0"+a:"00"+a}f.prototype.dump=function(){this.output="";for(var a=0;a<this.hexdump.length;a++){if(this.options.lineNumber){var b="";b+=this.options.style.lineNumberLeft;for(var c=a*this.options.width,d=8-c.toString().length,
e=0;e<d;e++)b+="0";b+=c;b+=this.options.style.lineNumberRight+" ";this.output+=this.options.html?'<span id="line-number">'+b+"</span>":b}b=0;this.output+=this.options.style.hexLeft;for(c=0;c<this.hexdump[a].data.length;c++)b==this.options.spacing?(this.output+=c==this.hexdump[a].data.length-1?this.hexdump[a].data[c]:this.hexdump[a].data[c]+" ",b=0):(this.output+=this.hexdump[a].data[c],b++);this.output+=this.options.style.hexRight;this.appendString(this.hexdump[a]);this.output+="\n"}document.getElementById(this.options.container).innerHTML=
this.output};f.prototype.appendString=function(a){this.output+=" "+this.options.style.stringLeft;this.output+=a.string;this.output+=this.options.style.stringRight};f.prototype.process=function(a){for(var b=[],c=[],d=0;d<a.length;d++)this.options.html?(c.push('<span data-hex-id="'+this.hexCounter+'">'+h(a[d])+"</span>"),b.push('<span data-string-id="'+this.hexCounter+'">'+g(a[d])+"</span>")):(c.push(h(a[d])),b.push(g(a[d]))),this.hexCounter++;if(c.length<this.options.width){a=this.options.width-c.length;
for(d=0;d<a;d++){var e="";e=this.options.html?'<span data-null="true">'+this.options.style.hexNull+"</span>":this.options.style.hexNull;c.push(e)}}if(b.length<this.options.width){a=this.options.width-b.length;for(d=0;d<a;d++)e="",e=this.options.html?'<span data-null="true">'+this.options.style.stringNull+"</span>":this.options.style.stringNull,b.push(e)}return{data:c,string:b.join("")}};return f}();
