(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(49)},29:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),c=a.n(s),i=(a(29),a(10)),o=a(12),l=a(7),u=a.n(l),d=a(8),h=a(2),m=a(3),p=a(5),v=a(4),f=a(6),g=function(e){return r.a.createElement("div",{className:"spinner-border text-".concat(e.color),role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))},b=function(e){var t=new Date(1e3*e),a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();return"".concat(a,"-").concat(n,"-").concat(r)},E=function(e){return Date.parse(e.trim())/1e3},y=a(9),k=a.n(y),N=Object({NODE_ENV:"production",PUBLIC_URL:"/accounts-app"}).REACT_APP_RECORDS_API_URL||"http://localhost:3001",j=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).dateInput=r.a.createRef(),a.titleInput=r.a.createRef(),a.amountInput=r.a.createRef(),a.state={edit:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleToggle",value:function(){this.setState({edit:!this.state.edit})}},{key:"handleEdit",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={date:E(this.dateInput.current.value),title:this.titleInput.current.value,amount:Number.parseInt(this.amountInput.current.value)},e.prev=2,e.next=5,r=this.props.record.id,s=a,k.a.put("".concat(N,"/api/v1/records/").concat(r),s);case 5:n=e.sent,this.setState({edit:!1}),this.props.handleEditRecord(this.props.record,n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}var r,s},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(d.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t=this.props.record.id,k.a.delete("".concat(N,"/api/v1/records/").concat(t));case 3:this.props.handleDeleteRecord(this.props.record),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}var t},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"recordRow",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,b(this.props.record.date)),r.a.createElement("td",null,this.props.record.title),r.a.createElement("td",null,"$",this.props.record.amount),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-1",onClick:this.handleToggle.bind(this)},"Edit"),r.a.createElement("button",{className:"btn btn-danger mr-1",onClick:this.handleDelete.bind(this)},"Delete")))}},{key:"recordForm",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:b(this.props.record.date),ref:this.dateInput})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.record.title,ref:this.titleInput})),r.a.createElement("td",null,r.a.createElement("input",{type:"text",className:"form-control",defaultValue:this.props.record.amount,ref:this.amountInput})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-info mr-1",onClick:this.handleEdit.bind(this)},"Update"),r.a.createElement("button",{className:"btn btn-danger mr-1",onClick:this.handleToggle.bind(this)},"Cancel")))}},{key:"render",value:function(){return this.state.edit?this.recordForm():this.recordRow()}}]),t}(n.Component),O=(a(48),function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={currentPage:a.props.currentPage},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"jump",value:function(e){this.setState({currentPage:parseInt(e.target.innerText)}),this.props.handleJumpPage(parseInt(e.target.innerText),10)}},{key:"moveForward",value:function(e){var t;t=this.state.currentPage+1<this.props.totalPages?this.state.currentPage+1:this.props.totalPages,this.setState({currentPage:t}),this.props.handleJumpPage(t,10)}},{key:"moveBackward",value:function(e){var t;t=this.state.currentPage>1?this.state.currentPage-1:1,this.setState({currentPage:t}),this.props.handleJumpPage(t,10)}},{key:"getPages",value:function(e){for(var t=[],a=0;a<e;a++)t.push(r.a.createElement("li",{className:"page-item ".concat(a+1===this.state.currentPage?"active":""),key:a,onClick:this.jump.bind(this)},r.a.createElement("span",{className:"page-link"},a+1)));return t}},{key:"render",value:function(){var e=this.getPages(this.props.totalPages);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination justify-content-center"},r.a.createElement("li",{className:"page-item ".concat(1===this.state.currentPage?"disabled":"")},r.a.createElement("span",{className:"page-link",onClick:this.moveBackward.bind(this)},"Previous")),e,r.a.createElement("li",{className:"page-item ".concat(this.state.currentPage===this.props.totalPages?"disabled":"")},r.a.createElement("span",{className:"page-link",onClick:this.moveForward.bind(this)},"Next"))))}}]),t}(n.Component)),x=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).recordsToDisplay=3,a.state={currentPage:1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"getTotalPages",value:function(){return Math.ceil(this.props.records.length/this.recordsToDisplay)}},{key:"getDisplayedRecords",value:function(){return this.props.records.slice(this.recordsToDisplay*this.state.currentPage-this.recordsToDisplay,this.recordsToDisplay*this.state.currentPage)}},{key:"jumpPage",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this,t=this.getDisplayedRecords();return this.props.error?r.a.createElement("div",null,"Error: ",this.props.error.message):this.props.isLoaded?r.a.createElement("div",null,r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,t.map(function(t){return r.a.createElement(j,{key:t.id,record:t,handleEditRecord:e.props.handleEditRecord,handleDeleteRecord:e.props.handleDeleteRecord})}))),r.a.createElement(O,{totalPages:this.getTotalPages(),currentPage:this.state.currentPage,handleJumpPage:this.jumpPage.bind(this)})):r.a.createElement("div",null,r.a.createElement(g,{color:"primary"}))}}]),t}(n.Component),P=a(11),w=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={date:"",title:"",amount:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(P.a)({},t,a))}},{key:"valid",value:function(){return this.state.date&&this.state.title&&this.state.amount}},{key:"handleSubmit",value:function(){var e=Object(d.a)(u.a.mark(function e(t){var a,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=Object(i.a)({},this.state,{date:E(this.state.date),amount:Number.parseInt(this.state.amount,10)}),e.prev=2,e.next=5,r=a,k.a.post("".concat(N,"/api/v1/records"),r);case 5:n=e.sent,this.props.handleNewRecord(n.data),this.setState({date:"",title:"",amount:""}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}var r},e,this,[[2,10]])}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("form",{className:"mb-3",onSubmit:this.handleSubmit.bind(this)},r.a.createElement("div",{className:"form-row align-items-center"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange.bind(this),placeholder:"Date",name:"date",value:this.state.date})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange.bind(this),placeholder:"Title",name:"title",value:this.state.title})),r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange.bind(this),placeholder:"Amount",name:"amount",value:this.state.amount})),r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!this.valid()},"Create Record"))))}}]),t}(n.Component);function D(e){return r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header bg-".concat(e.type," text-white")},e.text),r.a.createElement("div",{className:"card-body"},"$",e.amount)))}var C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={value:""},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"uniqueDates",value:function(e){return 0===e.length?[]:Object(o.a)(new Set(e.map(function(e){return b(e.date)})))}},{key:"getDailyAmounts",value:function(e,t){var a=0,n=!0,r=!1,s=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){var o=c.value;b(o.date)===e&&(a+=o.amount)}}catch(l){r=!0,s=l}finally{try{n||null==i.return||i.return()}finally{if(r)throw s}}return a}},{key:"handleChange",value:function(e){this.setState({value:e.target.value,amounts:this.getDailyAmounts(e.target.value,this.props.records)})}},{key:"render",value:function(){var e=this.uniqueDates(this.props.records),t=this.getDailyAmounts(this.state.value,this.props.records);return 0===this.props.records.length?r.a.createElement("div",null):r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text bg-info text-white"},"Daily Expenses")),r.a.createElement("select",{value:this.state.value,onChange:this.handleChange.bind(this),className:"custom-select"},r.a.createElement("option",null,"choose a date..."),e.map(function(e){return r.a.createElement("option",{value:e,key:e},e)})),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("span",{className:"input-group-text bg-warning text-dark"},"$"),r.a.createElement("span",{className:"input-group-text bg-".concat(t>=0?"success":"danger"," text-white")},t)))}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(v.a)(t).call(this,e))).state={error:null,isLoaded:!1,records:[]},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.a.get("".concat(N,"/api/v1/records"));case 3:t=e.sent,this.setState({records:t.data,isLoaded:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({isLoaded:!0,error:e.t0});case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(){return e.apply(this,arguments)}}()},{key:"addRecord",value:function(e){this.setState({error:null,isLoaded:!0,records:[].concat(Object(o.a)(this.state.records),[e])})}},{key:"updateRecord",value:function(e,t){var a=this.state.records.indexOf(e),n=this.state.records.map(function(e,n){return n!==a?e:Object(i.a)({},e,t)});this.setState({records:n})}},{key:"deleteRecord",value:function(e){var t=this.state.records.indexOf(e),a=this.state.records.filter(function(e,a){return a!==t});this.setState({records:a})}},{key:"getCredits",value:function(){return this.state.records.filter(function(e){return e.amount>=0}).reduce(function(e,t){return e+Number.parseInt(t.amount,10)},0)}},{key:"getDebits",value:function(){return this.state.records.filter(function(e){return e.amount<0}).reduce(function(e,t){return e+Number.parseInt(t.amount,10)},0)}},{key:"getBalance",value:function(){return this.getCredits()+this.getDebits()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Records"),r.a.createElement("div",{className:"row mb-3"},r.a.createElement(D,{text:"Credit",type:"success",amount:this.getCredits()}),r.a.createElement(D,{text:"Debit",type:"danger",amount:this.getDebits()}),r.a.createElement(D,{text:"Balance",type:"info",amount:this.getBalance()})),r.a.createElement(w,{handleNewRecord:this.addRecord.bind(this)}),r.a.createElement(C,{records:this.state.records}),r.a.createElement(x,{error:this.state.error,isLoaded:this.state.isLoaded,records:this.state.records,handleEditRecord:this.updateRecord.bind(this),handleDeleteRecord:this.deleteRecord.bind(this)}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.ae59678f.chunk.js.map