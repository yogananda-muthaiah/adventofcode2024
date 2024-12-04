sap.ui.define([
     "sap/m/IllustratedMessage",
 ], (IllustratedMessage) => {
     "use strict"
 
     new IllustratedMessage({
         title: "Welcome to Advent of Code 2024!",
         illustrationType: "sapIllus-NoTasks"
     }).placeAt("content")
 })