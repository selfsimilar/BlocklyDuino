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

Blockly.Blocks['i2c_matrix_begin'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("Type")
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_type),"TYPE")
      .appendField("Address")
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_address),"ADDRESS");
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
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_settextsize'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("setTextSize");
    this.appendValueInput("SIZE")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Size");
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_settextwrap'] = {
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("setTextWrap");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_settextcolor'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("setTextColor");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_drawpixel'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("drawPixel");
    this.appendValueInput("X")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_drawcircle'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("drawCircle");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("D")
      .setCheck("Number")
      .appendField("Diameter");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_drawract'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("drawRact");
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField("x0");
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField("y0");
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField("x1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField("y1");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_drawline'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("drawLine");
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField("x0");
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField("y0");
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField("x1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField("y1");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_fillract'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("fillRact");
    this.appendValueInput("X0")
      .setCheck("Number")
      .appendField("x0");
    this.appendValueInput("Y0")
      .setCheck("Number")
      .appendField("y0");
    this.appendValueInput("X1")
      .setCheck("Number")
      .appendField("x1");
    this.appendValueInput("Y1")
      .setCheck("Number")
      .appendField("y1");
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(profile.default.i2c_matrix_color), 'COLOR');
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

Blockly.Blocks['i2c_matrix_setrotation'] = {
  init: function() {
    this.setHelpUrl('');
    this.setColour(Blockly.Blocks.i2c_matrix.HUE);
    this.appendDummyInput()
      .appendField("I2C Matrix")
      .appendField(new Blockly.FieldImage(Blockly.Blocks.i2c_mini_matrix_image, 64, 64))
      .appendField("setRotation");
    this.appendValueInput("ANGLE")
      .setCheck("Number")
      .appendField("angle");
    this.setInputsInline(true);
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
    this.setInputsInline(true);
    this.setPreviousStatement(true,null);
    this.setNextStatement(true,null);
    this.setTooltip('');
  }
};

