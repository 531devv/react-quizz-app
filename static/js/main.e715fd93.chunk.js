(this["webpackJsonpreact-quizz-app"]=this["webpackJsonpreact-quizz-app"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"questions":[{"question":"Which of the following is not a JSON type","answers":["String","Date","Array","Object"],"correctIndex":1},{"question":"What is the file extension of JSON?","answers":[".jn",".js",".jsn",".json"],"correctIndex":3},{"question":"In the below notation, Employee is of type { \u201cEmployee\u201d: { \u201cName\u201d: \u201cAmy\u201d, \u201cAge\u201d: 25 } }","answers":["Object","Array","Class","Not a valid JSON string"],"correctIndex":0},{"question":"What does JSON stand for?","answers":["JavaScript Object Nomenclature","JavaScript Objective Notation","JavaScript Object Notation","JavaScript Orientated Nomenclature"],"correctIndex":2},{"question":"JSON elements are separated by","answers":["semi-colon","line break","comma","white space"],"correctIndex":2},{"question":"What keywords are reserved in JSON and cannot be used as keys?","answers":["Value","Object","There are none","Key"],"correctIndex":2}]}')},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),o=n.n(s),i=n(1),c=n(2),u=n(4),l=n(3),p=n(5),d=n(6),h=(n(15),n(16),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"quizz-question"},r.a.createElement("p",null,this.props.data.question,":"))}}]),t}(r.a.Component)),m=function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"quizz-questions"},r.a.createElement(h,{data:this.props.data}))}}]),t}(r.a.Component),b=(n(17),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data.answers.map((function(t,n){return r.a.createElement("button",{type:"text",className:"grid-item",value:n,onClick:e.props.answer},t)}));return r.a.createElement("div",{className:"quizz-answer"},r.a.createElement("div",{className:"grid"},t))}}]),t}(r.a.Component)),O=(n(18),function(e){function t(e){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"quizz-answers"},r.a.createElement(b,{data:this.props.data,answer:this.props.answer}))}}]),t}(r.a.Component)),j=(n(19),function(e){function t(e){var n;Object(i.a)(this,t),n=Object(u.a)(this,Object(l.a)(t).call(this,e));var a=Math.floor(Math.random()*n.props.data.questions.length);return n.state={randomKey:n.props.data.questions[a],randomQuestionIndex:a,points:0,completeQuestions:[]},n.getAnswer=n.getAnswer.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getAnswer",value:function(e){e.preventDefault();var t=this.state.completeQuestions,n=Math.floor(Math.random()*this.props.data.questions.length);if(t.push(this.state.randomQuestionIndex),e.target.value==this.state.randomKey.correctIndex){var a=this.state.points+1;this.setState({points:a})}this.setState({randomKey:this.props.data.questions[n],completeQuestions:t,randomQuestionIndex:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"quizz-container"},r.a.createElement(m,{data:this.state.randomKey}),r.a.createElement(O,{data:this.state.randomKey,answer:this.getAnswer}))}}]),t}(r.a.Component)),f=(n(20),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2020 Marek Klatt"))}}]),t}(r.a.Component)),v=n(9),w=(n(21),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{data:v}),r.a.createElement(f,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.e715fd93.chunk.js.map