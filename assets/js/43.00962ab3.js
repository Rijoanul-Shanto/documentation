(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{345:function(t,a,s){"use strict";s.r(a);var e=s(8),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"indexes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#indexes"}},[t._v("#")]),t._v(" Indexes")]),t._v(" "),s("h2",{attrs:{id:"list-all-indexes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-all-indexes"}},[t._v("#")]),t._v(" List all indexes")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes"}}),t._v(" "),s("p",[t._v("List all indexes.")]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_reviews"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"get-one-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-one-index"}},[t._v("#")]),t._v(" Get one index")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"GET",route:"/indexes/:index_uid"}}),t._v(" "),s("p",[t._v("Get information about an index.")]),t._v(" "),s("h4",{attrs:{id:"path-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X GET "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movies'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-2"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"create-an-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-index"}},[t._v("#")]),t._v(" Create an index")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"POST",route:"/indexes"}}),t._v(" "),s("p",[t._v("Create an index.")]),t._v(" "),s("p",[t._v("This route takes as parameter an unique "),s("code",[t._v("uid")]),t._v(" and "),s("strong",[t._v("optionally")]),t._v(" the "),s("RouterLink",{attrs:{to:"/guides/main_concepts/indexes.html#primary-key"}},[t._v("primary key")]),t._v(".")],1),t._v(" "),s("h4",{attrs:{id:"body"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index unique identifier ("),s("em",[t._v("mandatory")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("primaryKey")])]),t._v(" "),s("td",[t._v("The "),s("clientGlossary",{attrs:{word:"primary key"}}),t._v(" of the documents")],1)])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X POST "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "uid": "movies",\n  "primaryKey": "movie_id"\n}\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-201-created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-201-created"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("201 created")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movies"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711476Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711476Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This "),s("code",[t._v("updateId")]),t._v(" allows you to "),s("RouterLink",{attrs:{to:"/references/updates.html"}},[t._v("track the current update")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"update-an-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-an-index"}},[t._v("#")]),t._v(" Update an index")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"PUT",route:"/indexes/:index_uid"}}),t._v(" "),s("p",[t._v("Update an index.")]),t._v(" "),s("h4",{attrs:{id:"path-variables-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-2"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h4",{attrs:{id:"body-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#body-2"}},[t._v("#")]),t._v(" Body")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("primaryKey")])]),t._v(" "),s("td",[t._v("The "),s("clientGlossary",{attrs:{word:"primary key"}}),t._v(" of the documents")],1)])])]),t._v(" "),s("p",[t._v("The "),s("code",[t._v("uid")]),t._v(" of an index cannot be changed."),s("br"),t._v("\nThe "),s("code",[t._v("primaryKey")]),t._v(" can be added if it does not already exist (to know if it has been set, use "),s("RouterLink",{attrs:{to:"/references/indexes.html#get-one-index"}},[t._v("the get index route")]),t._v(").")],1),t._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guides/main_concepts/documents.html#primary-key"}},[t._v("There are many ways in MeiliSearch to set the primary key")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X PUT "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movie_review'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'{\n  "primaryKey" : "movie_review_id"\n}\'')]),t._v("\n")])])]),s("h4",{attrs:{id:"response-200-ok-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-200-ok-3"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("200 Ok")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_review"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"primaryKey"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"movie_review_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createdAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T09:40:33.711324Z"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updatedAt"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-11-20T10:16:42.761858Z"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"delete-an-index"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-an-index"}},[t._v("#")]),t._v(" Delete an index")]),t._v(" "),s("RouteHighlighter",{attrs:{method:"DELETE",route:"/indexes/:index_uid"}}),t._v(" "),s("p",[t._v("Delete an index.")]),t._v(" "),s("h4",{attrs:{id:"path-variables-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#path-variables-3"}},[t._v("#")]),t._v(" Path Variables")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Variable")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("index_uid")])]),t._v(" "),s("td",[t._v("The index UID")])])])]),t._v(" "),s("h3",{attrs:{id:"example-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -X DELETE "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700/indexes/movie'")]),t._v("\n")])])]),s("h4",{attrs:{id:"response-204-no-content"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#response-204-no-content"}},[t._v("#")]),t._v(" Response: "),s("code",[t._v("204 No Content")])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);