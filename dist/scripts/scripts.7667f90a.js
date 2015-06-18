"use strict";angular.module("myblogApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","btford.markdown"]).config(["$stateProvider","$urlRouterProvider","$routeProvider",function(a,b,c){a.state("about",{url:"/about",templateUrl:"views/about.html",controller:"AboutCtrl"}).state("default",{url:"/q",templateUrl:"views/main.html",controller:"MainCtrl"}).state("q2",{url:"/q/:category/:slug",templateUrl:"views/main.html",controller:"MainCtrl"}).state("q",{url:"/q/:category",templateUrl:"views/main.html",controller:"MainCtrl"}),b.otherwise("/q")}]),angular.module("myblogApp").controller("MainCtrl",["$scope","$stateParams","$state","blogdata",function(a,b,c,d){function e(b,c){b?a.selectedCategory=b:a.selectedCategory=a.allCategoriesWithCount[0].category,a.categoryList=a.metaData[a.selectedCategory],c&&f(a.categoryList[0].slug)}function f(b){if(b){var c=!1;a.selectedItem=b;var d=a.categoryList;console.log(d);for(var e=0;e<d.length;e++)if(d[e].slug===b){a.selectedPostMetadata=d[e],console.log(a.selectedPostMetadata),c=!0;break}c||(console.log("Invalid Slug- Defaulting"),a.selectedItem=a.categoryList[0].slug,a.selectedPostMetadata=a.categoryList[0])}else a.selectedItem=a.categoryList[0].slug,a.selectedPostMetadata=a.categoryList[0]}a.metaData=d.getAllPostsMetadata(),a.allCategoriesWithCount=d.getAllCategoriesWithCount();var g=b.category,h=b.slug;g?(g=g.toLowerCase(),a.metaData[g]?(console.log("valid Cat"),e(g,!1),h?(h=h.toLowerCase(),f(h)):f()):console.log("Invalid URL")):(a.selectedCategory=a.allCategoriesWithCount[0].category,a.categoryList=a.metaData[a.selectedCategory],a.selectedItem=a.categoryList[0].slug,a.selectedPostMetadata=a.categoryList[0]),a.getSelectedItem=function(){return"posts/"+a.selectedItem+".md"},a.menuClick=function(a){c.go("q",{category:a})},a.listClick=function(b){console.log(b),c.go("q2",{category:a.selectedCategory,slug:b})}}]),angular.module("myblogApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("myblogApp").service("blogdata",["$http","$window","$q",function(a,b,c){function d(){if(b.metadata){var a=b.metadata;for(var c in a)a.hasOwnProperty(c)&&(f.push(c),g.push({category:c,count:a[c].length}));h=!0,e=a,console.log(e)}else setTimeout(d(defer),1e3)}var e=null,f=[],g=[],h=!1;b._;d(),this.getAllPostsMetadata=function(){return e},this.getAllCategories=function(){return f},this.getAllCategoriesWithCount=function(){return g}}]);