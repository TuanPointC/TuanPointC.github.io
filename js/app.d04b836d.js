(function(t){function n(n){for(var i,s,l=n[0],r=n[1],o=n[2],u=0,v=[];u<l.length;u++)s=l[u],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&v.push(c[s][0]),c[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);h&&h(n);while(v.length)v.shift()();return e.push.apply(e,o||[]),a()}function a(){for(var t,n=0;n<e.length;n++){for(var a=e[n],i=!0,l=1;l<a.length;l++){var r=a[l];0!==c[r]&&(i=!1)}i&&(e.splice(n--,1),t=s(s.s=a[0]))}return t}var i={},c={app:0},e=[];function s(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,n,a){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)s.d(a,i,function(n){return t[n]}.bind(null,i));return a},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=n,l=l.slice();for(var o=0;o<l.length;o++)n(l[o]);var h=r;e.push([0,"chunk-vendors"]),a()})({0:function(t,n,a){t.exports=a("56d7")},"0b47":function(t,n,a){"use strict";a("cede")},"2fea":function(t,n,a){"use strict";a("f059")},"4cf6":function(t,n,a){"use strict";a("56fa")},"56d7":function(t,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),c=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",{staticClass:"app"},[a("load"),a("Banner"),a("Menu"),a("router-view"),a("Footer")],1)},e=[],s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app-bar",{staticClass:"menu",attrs:{dense:"","max-height":"48px"}},[a("v-container",{staticClass:"pa-0",staticStyle:{height:"100%"}},[a("div",{staticClass:"link"},[a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Home")])],1),a("router-link",{attrs:{to:"/thongbao"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Thông báo ")])],1),a("router-link",{attrs:{to:"/program"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v(" Chương trình")])],1),a("router-link",{attrs:{to:"/registration"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Đăng ký ")])],1),a("router-link",{attrs:{to:"/diadiem"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Thời gian & Địa điểm ")])],1),a("router-link",{attrs:{to:"/contact"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Liên hệ")])],1),a("router-link",{attrs:{to:"/links"}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v("Links ")])],1)],1),a("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var i=n.on,c=n.attrs;return[a("v-app-bar-nav-icon",t._g(t._b({staticClass:"iconBar"},"v-app-bar-nav-icon",c,!1),i))]}}])},[a("v-list",t._l(t.items,(function(n,i){return a("v-list-item",{key:i},[a("router-link",{attrs:{to:n.link}},[a("v-btn",{attrs:{text:"",tile:""}},[t._v(t._s(n.title))])],1)],1)})),1)],1)],1)],1)},l=[],r={data:function(){return{items:[{title:"Home",link:"/"},{title:"Chương trình",link:"/program"},{title:"Đăng ký",link:"/registration"},{title:"Thời gian & Địa điểm",link:"/diadiem"},{title:"Liên hệ",link:"/contact"},{title:"Links",link:"/links"}]}}},o=r,h=(a("e568"),a("2877")),u=a("6544"),v=a.n(u),g=a("40dc"),m=a("5bc1"),p=a("8336"),d=a("a523"),f=a("8860"),_=a("da13"),b=a("e449"),C=Object(h["a"])(o,s,l,!1,null,"682d948e",null),T=C.exports;v()(C,{VAppBar:g["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VContainer:d["a"],VList:f["a"],VListItem:_["a"],VMenu:b["a"]});var y=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"banner"},[a("div",{staticClass:"content"},[a("div",{staticClass:"text"},[a("span",{staticClass:"khoahoc khoahoc1"},[t._v("Khóa học")]),a("br"),t._v(" Tính toán lượng tử"),a("br"),t._v(" "),a("span",{staticClass:"khoahoc lythuyet"},[t._v("Lý thuyết và Thực hành")])]),a("div",{staticClass:"time mt-3"},[t._v("14-22, Tháng 11, 2020")])])])}],N={},x=N,S=(a("a2ac"),Object(h["a"])(x,y,k,!1,null,"7dcfa66b",null)),V=S.exports,H=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-footer",{staticClass:"footer",attrs:{padless:""}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),a("strong",[t._v("Quantum Computing School")])])],1)},w=[],Q={},P=Q,B=(a("4cf6"),a("62ad")),K=a("553a"),j=Object(h["a"])(P,H,w,!1,null,"66037eb1",null),M=j.exports;v()(j,{VCol:B["a"],VFooter:K["a"]});var D=function(){var t=this,n=t.$createElement,a=t._self._c||n;return t.isloaded?t._e():a("div",{staticClass:"group"},[a("div",{staticClass:"cube cube1"}),a("div",{staticClass:"cube cube2"}),a("div",{staticClass:"cube cube3"}),a("div",{staticClass:"cube cube4"})])},G=[],O={data:function(){return{isloaded:!1}},mounted:function(){var t=this;document.onreadystatechange=function(){"complete"==document.readyState&&(t.isloaded=!0)}}},E=O,q=(a("5f04"),Object(h["a"])(E,D,G,!1,null,"5ad45c31",null)),A=q.exports,F={components:{Menu:T,Banner:V,Footer:M,load:A}},L=F,W=(a("5c0b"),a("7496")),U=Object(h["a"])(L,c,e,!1,null,null,null),I=U.exports;v()(U,{VApp:W["a"]});var J=a("f309");i["a"].use(J["a"]);var R=new J["a"]({}),Y=a("8c4f"),$=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-container",{staticClass:"mt-5 mb-10 container"},[i("v-row",[i("v-col",{staticClass:"mt-5",attrs:{cols:"12",md:"8"}},[i("div",{staticClass:"box",attrs:{elevation:"1"}},[i("h2",{staticClass:"mt-5"},[t._v("Giới thiệu chung")]),i("p",{staticClass:"ml-2",staticStyle:{"text-align":"justify"}},[t._v(' Khác với máy tính thông thường hoạt động dựa trên vật lý cổ điển, máy tính lượng tử khai thác các nguyên lý của vật lý lượng tử để thực hiện tính toán. Sử dụng chồng chập lượng tử và vướng víu lượng tử để tăng tốc độ tính toán theo cấp số nhân, máy tính lượng tử sẽ có sức mạnh vượt trội, mang đến nhiều thay đổi lớn trong hầu hết các lĩnh vực của xã hội loài người. Tuy còn nhiều sai số và chứa ít qubit (bit lượng tử), máy tính lượng tử đã trở thành hiện thực và mọi người đều có thể truy cập, sử dụng chúng miễn phí, chẳng hạn trên nền tảng của IBM quantum computing. Khóa học về "thực hành lập trình lượng tử" gồm 6 ngày giới thiệu về tính toán lượng tử và hướng dẫn lập trình các thuật toán lượng tử. Học viên sẽ trực tiếp lập trình trên máy tính lượng tử của IBM sử dụng thư viện lượng tử Qiskit. ')]),i("h2",{staticClass:"mb-2 mt-2"},[t._v("Nội dung")]),i("ul",[i("li",[t._v("Nền tảng toán học của cơ học lượng tử")]),i("li",[t._v("Cơ học lượng tử từ góc nhìn của toán học")]),i("li",[t._v("Tính toán lượng tử và các thuật toán lượng tử cơ bản")]),i("li",[t._v("Thư viện lượng tử Qiskit")]),i("li",[t._v("Thực hành lập trình lượng tử và thực hành mô phỏng lượng tử")]),i("li",[t._v("Giới thiệu về học máy lượng tử và một vài thuật toán mới.")])]),i("h2",{staticClass:"mb-2 mt-3"},[t._v("Giảng viên và trợ giảng")]),i("ul",[i("li",[i("b",[t._v("PGS. TS. Nguyễn Bá Ân")]),t._v(", Trường Đại học Thăng Long")]),i("li",[i("b",[t._v("TS. Nguyễn Văn Duy")]),t._v(", Trường Đại học Phenikaa")]),i("li",[i("b",[t._v(" TS. Nguyễn Quốc Hưng")]),t._v(", Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội ")]),i("li",[i("b",[t._v("TS. Nguyễn Bảo Long")]),t._v(", Đại học California tại Berkeley, Hòa Kỳ ")]),i("li",[i("b",[t._v("PGS. TS. Đỗ Vân Nam")]),t._v(", Trường Đại học Phenikaa")]),i("li",[i("b",[t._v("Trần Minh Đức")]),t._v(", Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội ")]),i("li",[i("b",[t._v("Nguyễn Công Hà")]),t._v(", Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội ")])]),i("h2",{staticClass:"mt-5"},[t._v("Ngôn ngữ")]),i("ul",[i("li",[t._v("Tiếng Việt.")])]),i("h2",{staticClass:"mt-5"},[t._v("Kinh phí và tài trợ")]),i("p",{staticClass:"ml-2",staticStyle:{"text-align":"justify"}},[t._v(" Chương trình trọng điểm quốc gia phát triển Toán học giai đoạn 2010-2020 sẽ tài trợ chi phí tổ chức Khóa học và hỗ trợ một số chi phí cho học viên tham dự, chi tiết như sau: "),i("ul",[i("li",[t._v("Học phí, học liệu và vật tư phục vụ giảng dạy của Khóa học: miễn phí; ")]),i("li",[t._v("Hỗ trợ một phần tiền ăn, nước uống, chi phí đi lại, ăn ở tại nhà khách ĐHQGHN tại Ba Vì cho học viên tham dự theo quy định của nhà nước.")])])])])]),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-card",{staticClass:"mx-auto pt-2 mt-5",attrs:{elevation:"1"}},[i("h2",{staticClass:"text-center mt-3"},[t._v("Đơn vị tổ chức")]),i("div",{staticClass:"logoTaiTro pa-4"},[i("a",{attrs:{href:"https://l.facebook.com/l.php?u=https%3A%2F%2Fviasm.edu.vn%2F%3Ffbclid%3DIwAR11X8gSRUN66RLCfhmlhiABfW81WM8eWPN6ApXaAtT0pq3ZN5ZAMFGGMg4&h=AT2bvrtYMrlZ0zrVeqJPBQsxp_vnk9nrrh1SJe2OSKg9vDmlWJUkW_4K2uDwui-NuKAmLxetWNpVngVofRtPcRqsPTe8a0eXPEWjm8E-XjCwyb5t3S9YqiUnCpza7g"}},[i("img",{staticClass:" logovt d-block px-5",attrs:{src:a("c3b1"),alt:""}})]),i("a",{attrs:{href:"https://l.facebook.com/l.php?u=http%3A%2F%2Fhus.vnu.edu.vn%2F%3Ffbclid%3DIwAR3Jen-17clOV_0P92xTt8m3exclUY2oXfFpYPuNRAZQHb3FsFfiDd4a8v0&h=AT2bvrtYMrlZ0zrVeqJPBQsxp_vnk9nrrh1SJe2OSKg9vDmlWJUkW_4K2uDwui-NuKAmLxetWNpVngVofRtPcRqsPTe8a0eXPEWjm8E-XjCwyb5t3S9YqiUnCpza7g"}},[i("img",{staticClass:" logohus d-block px-10",attrs:{src:a("de72"),alt:""}})])])]),i("v-card",{staticClass:"mx-auto mt-5 mb-5 pt-2",attrs:{elevation:"1"}},[i("h2",{staticClass:"text-center mt-3"},[t._v("Ban tổ chức")]),i("v-card-text",[i("ul",{staticStyle:{"text-align":"justify"}},[i("li",{staticClass:"bantochuc"},[i("b",[t._v("PGS.TS Lê Minh Hà")]),t._v(", Viện Nghiên cứu cao cấp về Toán ")]),i("li",{staticClass:"bantochuc"},[i("b",[t._v("PGS.TS Ngạc An Bang")]),t._v(", Trường Đại học Khoa học Tự nhiên, ĐHQGHN ")])])])],1),i("v-card",{staticClass:"mx-auto mt-5 mb-5 pt-2",attrs:{elevation:"1"}},[i("h2",{staticClass:"text-center mt-3"},[t._v("Ban chuyên môn")]),i("v-card-text",[i("ul",{staticStyle:{"text-align":"justify"}},[i("li",{staticClass:"bantochuc"},[i("b",[t._v("TS. Nguyễn Quốc Hưng")]),t._v(", Trường Đại học Khoa học Tự nhiên, ĐHQGHN ")]),i("li",{staticClass:"bantochuc"},[i("b",[t._v("TS. Nguyễn Văn Duy")]),t._v(", Trường Đại học Phenikaa ")])])])],1)],1)],1)],1)},z=[],X={},Z=X,tt=(a("94a3"),a("b0af")),nt=a("99d9"),at=a("0fd9"),it=Object(h["a"])(Z,$,z,!1,null,"a4e60abc",null),ct=it.exports;v()(it,{VCard:tt["a"],VCardText:nt["a"],VCol:B["a"],VContainer:d["a"],VRow:at["a"]});var et=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{staticClass:"box mt-10 mb-10"},[a("h1",{staticClass:"text-center mb-5"},[t._v("Chương trình")]),a("v-expansion-panels",{attrs:{multiple:""},model:{value:t.panel,callback:function(n){t.panel=n},expression:"panel"}},t._l(t.time,(function(n,i){return a("v-expansion-panel",{key:i},[a("v-expansion-panel-header",{staticClass:"title",staticStyle:{"font-size":"1.5rem","font-weight":"bold"}},[t._v(" "+t._s(n.date)+" ")]),a("v-expansion-panel-content",[a("ul",t._l(n.event,(function(n){return a("li",{key:n},[t._v(t._s(n))])})),0)])],1)})),1)],1)])},st=[],lt={data:function(){return{panel:[0,1,2,3,4,5],time:[{date:"Thứ 7, Ngày 14/11/2020 (Trường ĐH Khoa học Tự nhiên, ĐHQGHN)",event:["08:45 – 10:15 : Đại số ma trận cho cơ học lượng tử (PGS. TS. Đỗ Vân Nam)","10:30 – 12:00 : Thực tập đại số ma trận (PGS. TS. Đỗ Vân Nam)","13:45 – 15:15 : Cơ học lượng tử 1 (PGS. TS. Nguyễn Bá Ân)","15:30 – 17:00 : Cơ học lượng tử 2 (PGS. TS. Nguyễn Bá Ân)"]},{date:"Chủ nhật, Ngày 15/11/2020 (Trường ĐH Khoa học Tự nhiên, ĐHQGHN)",event:["08:45 – 10:15 : Tính toán lượng tử 1 (TS. Nguyễn Văn Duy)","10:30 – 12:00 : Tính toán lượng tử 2 (TS. Nguyễn Văn Duy)","13:45 – 15:15 : Ngôn ngữ lập trình lượng tử (TS. Nguyễn Quốc Hưng)","15:30 – 17:00 : Thuật toán  Deutsch Jozsa (TS. Nguyễn Quốc Hưng)"]},{date:"Thứ 2, Ngày 16/11/2020 (Trường ĐH Khoa học Tự nhiên, ĐHQGHN)",event:["16:30 – 18:00: Thuật toán Grover (TS. Nguyễn Quốc Hưng, Trần Minh Đức)","18:15 – 19:45: Thực hành D-J và Grover  (TS. Nguyễn Quốc Hưng, Trần Minh Đức)"]},{date:"Thứ 3, Ngày 17/11/2020 (Trường ĐH Khoa học Tự nhiên, ĐHQGHN)",event:["16:30 – 18:00: Máy tính lượng tử (TS. Nguyễn Quốc Hưng)","18:15 – 19:45: Qubit siêu dẫn (TS. Nguyễn Văn Duy)"]},{date:"Thứ 7, Ngày 21/11/2020 (Nhà khách Đại học Quốc gia Hà Nội, Ba Vì)",event:["08:45 – 10:15 : Biến đổi Fourier lượng tử (TS. Nguyễn Văn Duy, Nguyễn Công Hà)","10:30 – 12:00 : Thuật toán Shor (TS. Nguyễn Văn Duy, Nguyễn Công Hà)","13:45 – 15:15 : Thuật toán Shor (TH) (TS. Nguyễn Văn Duy, Nguyễn Công Hà)","15:30 – 17:00 : Thuật toán Shor (TH) + hackathon (TS. Nguyễn Văn Duy, Nguyễn Công Hà)"]},{date:"Chủ nhật, Ngày 22/11/2020 (Nhà khách Đại học Quốc gia Hà Nội, Ba Vì)",event:["08:45 – 10:15 : Mô phỏng lượng tử (TS. Nguyễn Quốc Hưng, Trần Minh Đức)","10:30 – 12:00 : Thực hành mô phỏng lượng tử (TS. Nguyễn Quốc Hưng, Trần Minh Đức)","13:45 – 15:15 : Qubit siêu dẫn (Nâng cao) - TS. Nguyễn Bảo Long","15:30 – 17:00 : Tổng kết khóa học"]}]}}},rt=lt,ot=(a("97df"),a("cd55")),ht=a("49e2"),ut=a("c865"),vt=a("0393"),gt=Object(h["a"])(rt,et,st,!1,null,"2d42ffa4",null),mt=gt.exports;v()(gt,{VContainer:d["a"],VExpansionPanel:ot["a"],VExpansionPanelContent:ht["a"],VExpansionPanelHeader:ut["a"],VExpansionPanels:vt["a"]});var pt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{staticClass:"box mt-10 mb-10"},[a("h2",[t._v("Đối tượng:")]),a("p",[t._v(" Sinh viên từ năm thứ 3 và học viên cao học các ngành/chuyên ngành thuộc lĩnh vực khoa học tự nhiên: Toán học, Vật Lý, Cơ học, Khoa học máy tính & Công nghệ thông tin, Hóa học và các ngành liên quan, cùng những người yêu thích tính toán lượng tử. "),a("ul",[a("li",[a("b",[t._v("Yêu cầu:")]),t._v(" GPA > 3.0 và đã hoàn thành các môn học Toán cao cấp, vật lý đại cương. ")]),a("li",[a("b",[t._v("Số lượng:")]),t._v(" 50 học viên.")])])]),a("h2",[t._v("Đăng ký")]),a("ul",[a("li",[t._v(" Thời hạn đăng ký tham dự: 09/11/2020 (đăng ký có thể được đóng trước thời hạn nếu đã đủ số lượng học viên tham dự). ")]),a("a",{staticClass:"linhdk",attrs:{target:"_blank",href:"https://bom.to/lhl23pc"}},[t._v(">> Đăng ký tại đây")])])])])},dt=[],ft=(a("ce63"),{}),_t=Object(h["a"])(ft,pt,dt,!1,null,"99edb4ce",null),bt=_t.exports;v()(_t,{VContainer:d["a"]});var Ct=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{staticClass:"box mt-10 mb-10"},[a("h2",{staticClass:"mb-2"},[t._v("Liên hệ")]),a("ul",[a("li",{staticClass:"mb-2 ml-1"},[a("b",{staticClass:"chuvu"},[t._v("Phụ trách chuyên môn:")]),t._v(" "),a("br"),a("b",[t._v(" TS. Nguyễn Quốc Hưng")]),a("br"),t._v(" - Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia Hà Nội "),a("br"),t._v(" - Điện thoại: 091 849 7300 "),a("br"),t._v("- Email: "),a("a",{attrs:{href:"hungngq@hus.edu.vn",target:"_blank"}},[t._v("hungngq@hus.edu.vn")])]),a("li",[a("b",{staticClass:"chuvu"},[t._v("Thư ký hành chính:")]),t._v(" "),a("br"),a("b",[t._v("Cô Lê Thị Quý")]),t._v(" "),a("br"),t._v(" - Viện Nghiên cứu cao cấp về Toán "),a("br"),t._v(" - Điện thoại: (024). 3623.1542 "),a("br"),t._v(" - Email: "),a("a",{attrs:{href:"ltquy@viasm.edu.vn",target:"_blank"}},[t._v("ltquy@viasm.edu.vn")])])])])])},Tt=[],yt=(a("0b47"),{}),kt=Object(h["a"])(yt,Ct,Tt,!1,null,"cb910994",null),Nt=kt.exports;v()(kt,{VContainer:d["a"]});var xt=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",lg:"12",md:"12"}},[i("div",{staticClass:"box mt-8"},[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,e=n.attrs;return[i("a",t._g(t._b({staticStyle:{display:"block",width:"fit-content",margin:"0"},attrs:{href:"https://viasm.edu.vn/",target:"_blank"}},"a",e,!1),c),[i("div",{staticClass:"link linkvt d-flex logovt"},[i("img",{attrs:{src:a("c3b1"),alt:""}})])])]}}])},[i("h3",{staticClass:"toollip"},[t._v("VIASM - Viện nghiên cứu cao cấp về toán")])]),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,e=n.attrs;return[i("a",t._g(t._b({staticStyle:{display:"block",width:"fit-content",margin:"2rem"},attrs:{href:"http://hus.vnu.edu.vn/",target:"_blank"}},"a",e,!1),c),[i("div",{staticClass:"link linkvt d-flex"},[i("img",{attrs:{src:a("de72"),alt:""}})])])]}}])},[i("h3",{staticClass:"toollip"},[t._v("Trường Đại học Khoa học Tự nhiên, ĐHQGHN")])]),i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,e=n.attrs;return[i("a",t._g(t._b({staticStyle:{display:"block",width:"fit-content",margin:"2rem","margin-top":"4rem"},attrs:{href:"https://www.facebook.com/groups/VietnamQuantumComputing",target:"_blank"}},"a",e,!1),c),[i("div",{staticClass:"link linkvt d-flex align-center"},[i("img",{attrs:{src:a("6f8b"),alt:""}}),i("h2",{staticClass:"ml-3"},[t._v("Vietnam "),i("br"),t._v("Quantum "),i("br"),t._v("Computing")])])])]}}])},[i("h3",{staticClass:"toollip"},[t._v("Quantum Computing Community in Vietnam")])])],1)])],1)],1)},St=[],Vt={},Ht=Vt,wt=(a("2fea"),a("3a2f")),Qt=Object(h["a"])(Ht,xt,St,!1,null,"1acdccd7",null),Pt=Qt.exports;v()(Qt,{VCol:B["a"],VContainer:d["a"],VRow:at["a"],VTooltip:wt["a"]});var Bt=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{staticClass:"box mt-10"},[a("h1",{staticClass:"h1"},[t._v("Thời gian & Địa điểm")]),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Thứ Bảy, 14.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("08:45 - 17:00")]),a("div",{staticClass:"place"},[t._v("Trường Đại học Khoa học Tự nhiên, ĐHQGHN")])])])],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Chủ Nhật, 15.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("08:45 - 17:00")]),a("div",{staticClass:"place"},[t._v("Trường Đại học Khoa học Tự nhiên, ĐHQGHN")])])])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Thứ Hai, 16.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("16:30 - 19:45")]),a("div",{staticClass:"place"},[t._v("Trường Đại học Khoa học Tự nhiên, ĐHQGHN")])])])],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Thứ Ba, 17.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("16:30 - 19:45")]),a("div",{staticClass:"place"},[t._v("Trường Đại học Khoa học Tự nhiên, ĐHQGHN")])])])],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Thứ Bảy, 21.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("08:45 - 17:00")]),a("div",{staticClass:"place"},[t._v("Nhà khách Đại học Quốc gia Hà Nội, Ba Vì")])])])],1),a("v-col",{attrs:{cols:"12",lg:"3",sm:"6"}},[a("v-card",{staticClass:"card",attrs:{elevation:"2"}},[a("div",{staticClass:"title"},[t._v("Chủ Nhật, 22.11.2020")]),a("div",{staticClass:"content"},[a("div",{staticClass:"time"},[t._v("08:45 - 17:00")]),a("div",{staticClass:"place"},[t._v("Nhà khách Đại học Quốc gia Hà Nội, Ba Vì")])])])],1)],1),a("h1",{staticClass:"h1 mt-5"},[t._v("Vị trí")]),a("v-row",{staticClass:"justify-space-between"},[a("v-col",{attrs:{cols:"12",lg:"6"}},[a("iframe",{staticStyle:{border:"0",display:"block"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14899.67715690811!2d105.8079772!3d20.9958722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd740a66998e1a0ed!2sVNU%20University%20of%20Science!5e0!3m2!1sen!2s!4v1604556423267!5m2!1sen!2s",width:"100%",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})]),a("v-col",{attrs:{cols:"12",lg:"6"}},[a("iframe",{staticStyle:{border:"0",display:"block"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.3850247891046!2d105.40020721428866!3d21.097210690815253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134607e6a657795%3A0xe7a64b646337a0fe!2zTmjDoCBLaMOhY2ggxJBIUUdITiBCYSBWw6w!5e0!3m2!1sen!2s!4v1604556597272!5m2!1sen!2s",width:"100%",height:"450",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1)],1)])},Kt=[],jt={},Mt=jt,Dt=(a("6439"),Object(h["a"])(Mt,Bt,Kt,!1,null,"0b4f0980",null)),Gt=Dt.exports;v()(Dt,{VCard:tt["a"],VCol:B["a"],VContainer:d["a"],VRow:at["a"]});var Ot=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-container",[a("div",{staticClass:"box mt-10 mb-10"},[a("h2",[t._v("Thông báo số 1 "),a("a",{attrs:{target:"_blank",href:"https://l.facebook.com/l.php?u=https%3A%2F%2Fdrive.google.com%2Ffile%2Fd%2F1YJDMV5zK3-rxgCmNwIDxa9ZQqe1BUF4T%2Fview%3Fusp%3Dsharing%26fbclid%3DIwAR21PicuMKVHjUstblB4-iMECc_-5k7UELLWDD4o3DaUDQ99WYTN4yLaY-g&h=AT2bvrtYMrlZ0zrVeqJPBQsxp_vnk9nrrh1SJe2OSKg9vDmlWJUkW_4K2uDwui-NuKAmLxetWNpVngVofRtPcRqsPTe8a0eXPEWjm8E-XjCwyb5t3S9YqiUnCpza7g"}},[a("i",{staticClass:"fas fa-file-pdf"})])]),a("h2",{staticClass:"mb-2"},[t._v("Tài liệu tham khảo")]),a("ul",[a("li",{staticClass:"mb-2 ml-1"},[t._v(" Khóa học về tính toán lượng tử của IBM: "),a("a",{attrs:{href:"https://qiskit.org/learn/intro-qc-qh/ "}},[t._v("https://qiskit.org/learn/intro-qc-qh/ ")])]),a("li",[t._v(" Isaac Chuang, Michael Nielsen, "),a("i",[t._v("Quantum Computation and Quantum Information")]),t._v(", Cambridge University Press 2000, ISBN: 9781107002173. ")]),a("li",[t._v(" Wolfgang Scherer, "),a("i",[t._v("Mathematics of Quantum Computing")]),t._v(", Springer 2019, ISBN 978-3-030-12358-1. ")])])])])},Et=[],qt={},At=qt,Ft=(a("8dc3"),Object(h["a"])(At,Ot,Et,!1,null,"766bc18a",null)),Lt=Ft.exports;v()(Ft,{VContainer:d["a"]}),i["a"].use(Y["a"]);var Wt=[{path:"/",name:"home",component:ct},{path:"/program",name:"program",component:mt},{path:"/registration",name:"registration",component:bt},{path:"/links",name:"links",component:Pt},{path:"/thongbao",name:"thongbao",component:Lt},{path:"/diadiem",name:"diadiem",component:Gt},{path:"/contact",name:"contact",component:Nt}],Ut=new Y["a"]({base:"/",routes:Wt}),It=Ut;i["a"].config.productionTip=!1,new i["a"]({vuetify:R,router:It,render:function(t){return t(I)}}).$mount("#app")},"56fa":function(t,n,a){},5829:function(t,n,a){},"5a9c":function(t,n,a){},"5c0b":function(t,n,a){"use strict";a("9c0c")},"5f04":function(t,n,a){"use strict";a("5829")},"60a9":function(t,n,a){},6439:function(t,n,a){"use strict";a("70fa")},"6c0b":function(t,n,a){},"6f8b":function(t,n,a){t.exports=a.p+"img/logofacebook.86c3615e.png"},"70fa":function(t,n,a){},"76a4":function(t,n,a){},"8dc3":function(t,n,a){"use strict";a("60a9")},"94a3":function(t,n,a){"use strict";a("5a9c")},"97df":function(t,n,a){"use strict";a("fc8e")},"9c0c":function(t,n,a){},a2ac:function(t,n,a){"use strict";a("6c0b")},a5c2:function(t,n,a){},c3b1:function(t,n,a){t.exports=a.p+"img/logovt.998a4807.png"},ce63:function(t,n,a){"use strict";a("a5c2")},cede:function(t,n,a){},de72:function(t,n,a){t.exports=a.p+"img/logohus.ba870ece.png"},e568:function(t,n,a){"use strict";a("76a4")},f059:function(t,n,a){},fc8e:function(t,n,a){}});
//# sourceMappingURL=app.d04b836d.js.map