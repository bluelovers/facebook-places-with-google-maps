// ==UserScript==
// @name           Facebook Places - With Google Maps
// @namespace      http://swaroop.in
// @description    Facebook places by default has Bing maps, but if you wish to have Google Maps instead. This is the right script for you
// @include        http://www.facebook.com/#!/pages/*
// @require        http://ajax.microsoft.com/ajax/jquery/jquery-1.4.2.min.js
// ==/UserScript==

alert($('iframe[class=map_iframe]'));