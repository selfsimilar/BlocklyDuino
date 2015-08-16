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

goog.provide('Blockly.Blocks.i2c_matrix');

goog.require('Blockly.Blocks');

Blockly.Blocks.i2c_matrix.HUE = 225;

Blockly.Blocks.i2c_mini_matrix_image = filepath.media+'/i2c_mini_matrix.jpg';

Blockly.Blocks['i2c_mini_matrix_begin'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("8x8 Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("Address")
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_mini_matrix_address),"ADDRESS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_clear'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("Clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_setcursor'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("SetCursor");
    this.appendValueInput("COL")
      .setCheck("Number")
      .appendField("Col");
    this.appendValueInput("ROW")
      .setCheck("Number")
      .appendField("Row");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_print'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("Print");
    this.appendValueInput("CONTENT")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("text");
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_writedisplay'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("WriteDisplay");
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

