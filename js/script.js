// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-05/sw.js", {
    scope: "/ICS20-Unit-5-05/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  const lengthAString = document.getElementById("lengthA").value
  const lengthBString = document.getElementById("lengthB").value
  const lengthCString = document.getElementById("lengthC").value

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // using the cosine law
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  if (angleA == angleB && angleA == angleC) {
    document.getElementById("answer").innerHTML =
      "You have an equilateral triangle";
  } else if ((angleA != angleB) && (angleA != angleC)) {
      document.getElementById("answer").innerHTML =
        "You have an scalene triangle";
  } else if ((angleA != angleB) && (angleA == angleC)) {
      document.getElementById("answer").innerHTML =
        "You have an isosceles triangle";
  } else if ((angleA == angleB) && (angleA != angleC)) {
    document.getElementById("answer").innerHTML =
      "You have an isosceles triangle";
  } else {
      document.getElementById("answer").innerHTML =
        "Not a triangle";
  }
}
