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

Blockly.Blocks.rgbled.HUE = 215;

Blockly.Blocks.rgbled.image = filepath.media+'/rgbled.jpg';

Blockly.Blocks['rgbled_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.RGBLED_BEGIN_HELPURL);
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image, 64, 64))
      .appendField(Blockly.Msg.RGBLED_BEGIN_SETTING)
      .appendField(Blockly.Msg.RGBLED_BEGIN_NUM)
      .appendField(new Blockly.FieldTextInput("1"),"NUM");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RGBLED_BEGIN_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RGBLED_BEGIN_BRIGHTNESS)
      .appendField(new Blockly.FieldTextInput("50"),"BRIGHTNESS");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_BEGIN_TOOLTIP);
  }
};

Blockly.Blocks['rgbled_setpixelcolor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.RGBLED_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image, 64, 64))
      .appendField(Blockly.Msg.RGBLED_SETPIXELCOLOR_TARGET)
      .appendField(new Blockly.FieldTextInput("0"),"TARGET");
    this.appendDummyInput()
      .appendField(Blockly.Msg.RGBLED_SETPIXELCOLOR_COLOR)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.RGBLED_SETPIXELCOLOR_RED,"red"],[Blockly.Msg.RGBLED_SETPIXELCOLOR_GREEN,"green"],[Blockly.Msg.RGBLED_SETPIXELCOLOR_BLUE,"blue"]]), "COLOR")
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_SETPIXELCOLOR_TOOLTIP);
  }
}

Blockly.Blocks['rgbled_custom_setpixelcolor'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_HELPURL);
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image, 64, 64))
    this.appendValueInput("TARGET")
      .setCheck("Number")
      .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TARGET)
    this.appendValueInput("R")
      .setCheck("Number")
      .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_R)
    this.appendValueInput("G")
      .setCheck("Number")
      .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_G)
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_B)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_CUSTOM_SETPIXELCOLOR_TOOLTIP);
  }
}

Blockly.Blocks['rgbled_show'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.RGBLED_SHOW_HELPURL);
    this.setColour(Blockly.Blocks.rgbled.HUE);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage(Blockly.Blocks.rgbled.image, 64, 64))
      .appendField(Blockly.Msg.RGBLED_SHOW)
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RGBLED_SHOW_TOOLTIP);
  }
}
