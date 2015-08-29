/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.i2c_sevenseg');

goog.require('Blockly.Blocks');

Blockly.Blocks.i2c_sevenseg.HUE = 240;

Blockly.Blocks.i2c_sevenseg.image = filepath.media+'/sevenseg.jpg';

Blockly.Blocks['i2c_sevenseg_begin'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image, 64, 64))
      .appendField(Blockly.Msg.I2C_SEVENSEG_ADDRESS)
      .appendField(new Blockly.FieldDropdown(profile.default.led_backpack_address),"ADDRESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_sevenseg_print'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image, 64, 64))
      .appendField(Blockly.Msg.I2C_SEVENSEG_PRINT);
    this.appendValueInput("NUM")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.I2C_SEVENSEG_NUM);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_sevenseg_writedisplay'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image, 64, 64))
      .appendField(Blockly.Msg.I2C_SEVENSEG_WRITEDISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_sevenseg_writedigitnum'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image, 64, 64))
      .appendField(Blockly.Msg.I2C_SEVENSEG_WRITEDIGITNUM);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_POSITION)
      .appendField(new Blockly.FieldTextInput("0"),"POSITION");
    this.appendValueInput("NUM")
      .setCheck("Number")
      .appendField(Blockly.Msg.I2C_SEVENSEG_NUM);
    this.appendValueInput("DOTS")
      .setCheck("BOOLEAN")
      .appendField(Blockly.Msg.I2C_SEVENSEG_DOTS);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_sevenseg_drawcolon'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.I2C_SEVENSEG_HELPURL);
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.I2C_SEVENSEG_TITLE)
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_sevenseg.image, 64, 64))
    this.appendValueInput("DOTS")
      .setCheck("BOOLEAN")
      .appendField(Blockly.Msg.I2C_SEVENSEG_COLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_sevenseg_boolean'] = {
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.I2C_SEVENSEG_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.I2C_SEVENSEG_BOOLEAN_FALSE, 'FALSE']];
    this.setColour(Blockly.Blocks.i2c_sevenseg.HUE);
    this.setOutput(true, 'Boolean');
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
  }
};
