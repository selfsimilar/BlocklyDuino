/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.rgbled');

goog.require('Blockly.Blocks');

Blockly.Blocks.rgbled.HUE = 260;

Blockly.Blocks['rgbled_begin'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField("RGBLED.begin")
      .appendField("num")
      .appendField(new Blockly.FieldTextInput("1"),"NUM");
    this.appendDummyInput()
      .appendField("Pin#")
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['rgbled_setbrightness'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField("RGBLED.setBrightness")
      .appendField("brightness")
      .appendField(new Blockly.FieldTextInput("50"),"BRIGHTNESS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}

Blockly.Blocks['rgbled_custom_setpixelcolor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField("RGBLED.setPixelColor")
      .appendField("target")
      .appendField(new Blockly.FieldTextInput("0"),"TARGET");
    this.appendDummyInput()
      .appendField("R")
      .appendField(new Blockly.FieldTextInput("255"),"R");
    this.appendDummyInput()
      .appendField("G")
      .appendField(new Blockly.FieldTextInput("0"),"G");
    this.appendDummyInput()
      .appendField("B")
      .appendField(new Blockly.FieldTextInput("0"),"B");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}

Blockly.Blocks['rgbled_show'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField("RGBLED.show")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
}

